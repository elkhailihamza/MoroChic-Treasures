<?php

namespace App\Http\Controllers;

use App\Models\Order;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Stripe\Stripe;

class OrderController extends Controller
{
    public function createOrder(Request $request)
    {
        $user = $request->user();
        $products = $request->input("cartItems");
        $totalPrice = $request->input("totalPrice");
        $order = Order::create(["total_amount" => $totalPrice, "user_id" => $user->id]);
        foreach ($products as $product) {
            $productId = $product['id'];
            $order->products()->attach($productId);
        }
        DB::beginTransaction();
        try {
            DB::commit();
        } catch (\Exception $e) {
            DB::rollback();
        }

        Stripe::setApiKey(env('STRIPE_SECRET'));

        $session = \Stripe\Checkout\Session::create([
            'payment_method_types' => ['card'],
            'line_items' => [[
                'price_data' => [
                    'currency' => 'usd',
                    'product_data' => [
                        'name' => $product['title'], 
                        'description' => $product['body'], 
                    ],
                    'unit_amount' => $product['price'] * 100,
                ],
                'quantity' => $product['quantity'],
            ]],
            'mode' => 'payment',
            'success_url' => url('/success?session_id={CHECKOUT_SESSION_ID}'),
            'cancel_url' => url('/cancel'),
        ]);

        return response()->json(['redirect_url' => $session->url]);
    }
}
