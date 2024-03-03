<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;
    protected $fillable = [
        'title',
        'content',
        'stock',
        'user_id',
    ];
    public function product_images()
    {
        return $this->hasMany(ProductImages::class, 'product_id');
    }
}
