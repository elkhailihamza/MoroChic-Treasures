<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;
    protected $fillable = [
        'title',
        'price',
        'mini-body',
        'body',
        'stock',
        'user_id',
        'category_id',
    ];
    public function product_images()
    {
        return $this->hasMany(ProductImages::class, 'product_id');
    }
    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }
    public function tags()
    {
        return $this->belongsToMany(Tag::class);
    }
    public function categories() {
        return $this->belongsTo(Category::class, 'category_id');
    }
}
