<?php

namespace App\Http\Controllers;

use App\Models\Wishlist;
use Illuminate\Http\Request;

class WishlistController extends Controller
{
    public function index(Request $request)
    {
        $user = $request->user();
        $wishlistedProducts = $user->wishlist->products->select('id', 'title', 'created_at')->get();
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
        $wishlist = $user->wishlist;
        $hasWishlisted = $wishlist->products->contains('id', $product_id);
        return response()->json([
            'hasWishlisted' => $hasWishlisted ?? false,
        ], 200);
    }
}
