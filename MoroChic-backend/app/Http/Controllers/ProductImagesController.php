<?php

namespace App\Http\Controllers;

use App\Models\ProductImages;
use Illuminate\Http\Request;

class ProductImagesController extends Controller
{
    public function store($images, $product)
    {
        foreach ($images as $image) :
            $imagePath = $image->store('images', 'public');
            if ($product->cover && file_exists(storage_path('app/public/' . $product->book_cover))) {
                unlink(storage_path('app/public/' . $product->book_cover));
            }
            $imagePath = $product->file('img_url')->store('product_images', 'public');
            ProductImages::create([
                'productId' => $product->id,
                'img_url' => $imagePath,
            ]);
        endforeach;
    }
}
