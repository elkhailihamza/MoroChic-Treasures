<?php

namespace App\Http\Controllers;

use App\Models\ReviewImages;
use Illuminate\Http\Request;

class ReviewImagesController extends Controller
{
    public function store($images, $review_id)
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
