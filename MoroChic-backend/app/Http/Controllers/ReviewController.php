<?php

namespace App\Http\Controllers;
use App\Models\Review;
use App\Models\ReviewImages;
use Illuminate\Http\Request;
use Illuminate\Validation\ValidationException;

class ReviewController extends Controller
{
    public function store(Request $request)
    {
        try {
            $request->validate([
                'title' => 'required|string|max:255',
                'body' => 'required|string|max:2000',
                'rating' => 'required|numeric|between:0,5',
                'images.*' => 'required|image|mimes:jpeg,png,jpg|max:2048',
            ]);

            $review = Review::create([
                'title' => $request->input('title'),
                'body' => $request->input('body'),
                'rating' => $request->input('rating'),
                'product_id' => $request->input('product_id'),
                'user_id' => $request->user()->id,
            ]);

            if ($request->has('images') && is_array($request->images)) {
                $this->uploadImages($request->images, $review->id);
            }

            return response()->json([
                [
                    'message' => 'Successfully submitted review!',
                    'review' => $review,
                ],
                201
            ]);
        } catch(ValidationException $e) {
            return response()->json([
                'message' => 'Review Error!',
                'error' => $e->errors(),
            ], 422);
        }
    }
    public function uploadImages($images, $review_id)
    {
        foreach ($images as $image) :
            $imagePath = $image->store('images', 'public');
            ReviewImages::create([
                'review_id' => $review_id,
                'img_url' => $imagePath,
            ]);
        endforeach;
    }
}
