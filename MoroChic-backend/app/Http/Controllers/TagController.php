<?php

namespace App\Http\Controllers;

use App\Models\Product;
use App\Models\Tag;
use Illuminate\Http\Request;
use Illuminate\Validation\ValidationException;

class TagController extends Controller
{
    public function addOrRemoveTags($tagsToAdd, $tagsToRemove, Product $product)
    {
        if (!empty($tagsToAdd)) {
            $product->tags()->attach($tagsToAdd);
        }

        if (!empty($tagsToRemove)) {
            $product->tags()->detach($tagsToRemove);
        }
    }
    public function store(Request $request)
    {
        try {
            $data = $request->validate([
                'tag_name' => 'required|string|max:255'
            ]);

            $tag = Tag::create($data);

            return response()->json([
                'message' => 'successfully created tag!',
                'tag' => $tag,
            ]);
        } catch (ValidationException $e) {
            return response()->json([
                'message' => 'Tag creation error!',
                'error' => $e->errors(),
            ]);
        }
    }
}
