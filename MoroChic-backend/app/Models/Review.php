<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Review extends Model
{
    use HasFactory;
    protected $fillable = [
        'title',
        'body',
        'rating',
        'product_id',
        'user_id',
    ];
    public function review_images()
    {
        return $this->hasMany(ReviewImages::class, 'review_id');
    }
}
