<?php

namespace App\Http\Controllers;

use App\Models\Product;
use App\Models\ProductImages;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Validation\ValidationException;

class ProductController extends Controller
{
    protected $ProductImagesController;

    public function __construct(ProductImagesController $ProductImagesController)
    {
        $this->ProductImagesController = $ProductImagesController;
    }
    public function index()
    {
        $products = Product::get();
        return response()->json([
            'message' => 'Fetched Products!',
            'products' => $products,
        ], 200);
    }

    public function getProduct($id)
    {
        try {
            $product = Product::with("product_images")->findOrFail($id);
            return response()->json($product, 200);
        } catch (Exception $e) {
            return response()->json(['message' => 'Product not found'], 404);
        }
    }

    public function getProducts(Request $request)
    {
        $product_ids = $request->input('ids');
        $products = Product::whereIn('id', $product_ids)->get();
        return response()->json([
            'products' => $products,
        ], 200);
    }

    public function getProductsBySearch(Request $request)
    {
        $searchValue = $request->input("searchValue");
        $products = Product::where("title", "like", "%" . $searchValue . "%")->get();
        return response()->json([
            'products' => $products,
        ], 200);
    }

    public function getUserMadeProducts(Request $request)
    {
        $user = $request->user();
        $products = $user->products;
        return response()->json([
            'products' => $products,
        ], 200);
    }
    public function store(Request $request)
    {
        try {
            $request->validate([
                'title' => 'required|string|max:255',
                'price' => 'required|numeric',
                'mini-body' => 'required|string',
                'body' => 'required|string|max:8000',
                'stock' => 'required|integer|between:1,999',
                'images.*' => 'required|image|mimes:jpeg,png,jpg|max:2048',
                'category' => 'required',
            ]);

            DB::beginTransaction();
            $product = Product::create(
                [
                    'title' => $request->input('title'),
                    'price' => $request->input('price'),
                    'mini-body' => $request->input('mini-body'),
                    'body' => $request->input('body'),
                    'stock' => $request->input('stock'),
                    'user_id' => $request->user()->id,
                    'category_id' => $request->input('category'),
                ]
            );

            $this->ProductImagesController->uploadImages($request->input('images'), $product);

            if ($request->has('tags_to_add') || $request->has('tags_to_remove')) {
                $this->addOrRemoveTags($request->input('tags_to_add'), $request->input('tags_to_remove'), $product);
            }
            DB::commit();

            return response()->json(
                [
                    'message' => 'successfully created product!',
                    'product' => $product,
                ],
                201
            );
        } catch (ValidationException $e) {
            return response()->json([
                'message' => 'Product Creation Error!',
                'error' => $e->validator->errors()->all(),
            ], 422);
        } catch (Exception $e) {
            return response()->json([
                'message' => 'Product Creation Error!',
                'error' => $e->getMessage(),
            ], 422);
        }
    }
}
