<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Validation\ValidationException;

class CategoryController extends Controller
{
    public function store(Request $request)
    {
        try {
            $data = $request->validate([
                'category_name' => 'required|string|max:255',
                'info' => 'nullable|string|max:400',
            ]);

            $category = Category::create($data);

            return response()->json([
                'message' => 'Successfully Made Category!',
                'category' => $category,
            ], 201);
        } catch (ValidationException $e) {
            return response()->json([
                'message' => 'Category Creation Error!',
                'error' => $e->validator->errors()->all(),
            ], 422);
        }
    }
}
