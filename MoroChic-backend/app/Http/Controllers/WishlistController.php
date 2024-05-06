<?php

namespace App\Http\Controllers;

use App\Models\Wishlist;
use Illuminate\Http\Request;

class WishlistController extends Controller
{
    public function index(Request $request)
    {
        $user = $request->user();
        $wishlistedProducts = Wishlist::select('wishlists.*', 'products.id', 'products.title')
            ->join('products', 'wishlists.product_id', '=', 'products.id')
            ->where('wishlists.user_id', $user->id)
            ->get();
        return response()->json([
            "wishlist" => $wishlistedProducts ?? [],
        ], 200);
    }

    public function store(Request $request)
    {
        $user = $request->user();
        $product_id = $request->input('id');
        $isWishlisted = $request->input('isWishlisted');

        if ($isWishlisted) {
            $wishlistedItem = Wishlist::where('user_id', $user->id)->where('product_id', $product_id)->first();
            if ($wishlistedItem) {
                $wishlistedItem->delete();
            }
        } else {
            Wishlist::create([
                'user_id' => $user->id,
                'product_id' => $product_id,
            ]);
        }

        return response()->json([
            'hasWishlisted' => true,
        ], 200);
    }
    public function check(Request $request)
    {
        $user = $request->user();
        $product_id = $request->input('id');
        $hasWishlisted = Wishlist::where('user_id', $user->id)->where('product_id', $product_id)->exists();
        return response()->json([
            'hasWishlisted' => $hasWishlisted ?? false,
        ], 200);
    }
}
