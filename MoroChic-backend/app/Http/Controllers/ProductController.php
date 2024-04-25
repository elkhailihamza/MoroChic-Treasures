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

    public function __construct(ProductImagesController $ProductImagesController) // or ImageUtility $imageService
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
            $product = Product::findOrFail($id);
            return response()->json($product, 200);
        } catch (Exception $e) {
            return response()->json(['message' => 'Product not found'], 404);
        }
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
                'images.*' => 'image|mimes:jpeg,png,jpg|max:2048',
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
                    'category_id' => $request->input('category') ?? NULL,
                ]
            );

            if ($request->has('images') && is_array($request->images)) {
                $this->ProductImagesController->uploadImages($request->images, $product);
            }

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
