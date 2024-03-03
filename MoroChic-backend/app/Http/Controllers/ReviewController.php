<?php

namespace App\Http\Controllers;

app/Http/Controllers/ProductController.php
use Illuminate\Http\Request;

class ReviewController extends Controller
{
    public function store(Request $request)
    {
        try {
            $request->validate([
                
            ]);
        } catch(ValidationException) {

        }
    }
}
