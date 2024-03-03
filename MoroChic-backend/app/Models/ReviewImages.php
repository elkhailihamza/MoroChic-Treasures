<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ReviewImages extends Model
{
    use HasFactory;
    protected $fillable = [
        'review_id',
        'img_url',
    ];
    public function review()
    {
        return $this->belongsTo(Review::class, 'review_id');
    }
}
