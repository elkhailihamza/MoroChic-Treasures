<?php

namespace App\Http\Controllers;

use App\Models\ProductImages;
use Illuminate\Http\Request;

class ProductImagesController extends Controller
{
    public function uploadImages($images, $product)
    {
        foreach ($images as $image) :
            $imagePath = $image->store('images', 'public');
            if ($product->product_images->img_url && file_exists(storage_path('app/public/' . $product->product_images->img_url))) {
                unlink(storage_path('app/public/' . $product->product_images->img_url));
            }
            ProductImages::create([
                'productId' => $product->id,
                'img_url' => $imagePath,
            ]);
        endforeach;
    }
}
