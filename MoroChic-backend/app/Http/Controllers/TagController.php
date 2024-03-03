<?php

namespace App\Http\Controllers;

use App\Models\Tag;
use Illuminate\Http\Request;
use Illuminate\Validation\ValidationException;

class TagController extends Controller
{
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
