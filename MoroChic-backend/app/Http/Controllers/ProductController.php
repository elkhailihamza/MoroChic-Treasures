<?php

namespace App\Http\Controllers;

use App\Models\Product;
use App\Models\ProductImages;
use Illuminate\Http\Request;
use Illuminate\Validation\ValidationException;

class ProductController extends Controller
{
    public function store(Request $request)
    {
        try {
            $request->validate([
                'title' => 'required|string|max:255',
                'content' => 'required|string|max:8000',
                'stock' => 'required|int|between:1,999',
                'images.*' => 'required|image|mimes:jpeg,png,jpg|max:2048',
            ]);

            $product = Product::create(
                [
                    'title' => $request->input('title'),
                    'content' => $request->input('content'),
                    'stock' => $request->input('stock'),
                    'user_id' => $request->user()->id,
                    'category_id' => $request->input('category') ?? NULL,
                ]
            );

            if ($request->has('images') && is_array($request->images)) {
                $this->uploadImages($request->images, $product->id);
            }

            if ($request->has('tags_to_add') || $request->has('tags_to_remove')) {
                $this->addOrRemoveTags($request->input('tags_to_add'), $request->input('tags_to_remove'), $product);
            }

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
                'error' => $e->errors()
            ], 422);
        }
    }
    public function uploadImages($images, $productId)
    {
        foreach ($images as $image) :
            $imagePath = $image->store('images', 'public');
            ProductImages::create([
                'productId' => $productId,
                'img_url' => $imagePath,
            ]);
        endforeach;
    }
    public function addOrRemoveTags($tagsToAdd, $tagsToRemove, Product $product)
    {
        if (!empty($tagsToAdd)) {
            $product->tags()->attach($tagsToAdd);
        }

        if (!empty($tagsToRemove)) {
            $product->tags()->detach($tagsToRemove);
        }
    }
}
