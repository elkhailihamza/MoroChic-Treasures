<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\ProductImagesController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ReviewController;
use App\Http\Controllers\TagController;
use App\Http\Controllers\WishlistController;
use App\Models\Profile;
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
    Route::middleware('auth:sanctum')->group(function () {
        Route::post('/me', 'me');
        Route::post('/logout', 'logout');
    });
});

Route::middleware('auth:sanctum')->group(function () {
    Route::controller(ProductController::class)->group(function () {
        Route::get('/product/get/{id}', 'getProduct');
        Route::post('/vendor/products/store', 'store');
        Route::get('/vendor/products', 'getUserMadeProducts');
    });
    Route::post('/reviews/store', [ReviewController::class, 'store']);
    Route::post('/tags/store', [TagController::class, 'store']);
    Route::controller(CategoryController::class)->group(function () {
        Route::post('/categories/store', 'store');
        Route::get('/categories/get', 'getCategories');
    });
    Route::controller(ProfileController::class)->group(function () {
        Route::get('/profile/get', 'getUserProfile');
        Route::post('/profile/update/avatar', 'updateAvatar');
        Route::post('/profile/remove/avatar', 'removeAvatar');
        Route::post('/profile/update/info', 'updateInfo');
    });
    Route::get("/wishlist/get", [WishlistController::class, "index"]);
    Route::post("/wishlist/send", [WishlistController::class, "store"]);
    Route::get("/wishlist/check", [WishlistController::class, "check"]);
});

Route::get('/products/view', [ProductController::class, 'index']);
