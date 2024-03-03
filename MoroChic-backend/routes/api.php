<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\ReviewController;
use App\Http\Controllers\TagController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/


Route::controller(AuthController::class)->group(function () {
    Route::post('/register', 'register');
    Route::post('/login', 'login');
    Route::post('/me', 'me')->middleware('auth:sanctum');
});

Route::middleware('auth:sanctum')->group(function() {
    Route::controller(ProductController::class)->group(function() {
        Route::post('/products/store', 'store');
    });
    
    Route::controller(ReviewController::class)->group(function() {
        Route::post('/reviews/store', 'store');
    });

    Route::controller(TagController::class)->group(function() {
        Route::post('/tags/store', 'store');
    });
});

