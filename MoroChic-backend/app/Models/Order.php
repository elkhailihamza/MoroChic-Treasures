<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'status',
        'total_amount',
        'stripe_ID',
        'payement_status',
    ];

    public function products() {
        return $this->belongsToMany(Product::class);
    }
}
