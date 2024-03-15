<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\ProductImagesController;
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

Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);
Route::post('/me', [AuthController::class, 'me'])->middleware('auth:sanctum');

Route::middleware('auth:sanctum')->group(function () {
    Route::post('/products/store', [ProductController::class, 'store']);
    Route::post('/products/images/store', [ProductImagesController::class, 'store']);
    Route::post('/reviews/store', [ReviewController::class, 'store']);
    Route::post('/tags/store', [TagController::class, 'store']);
    Route::post('/categories/store', [CategoryController::class, 'store']);
});

Route::get('/products/view', [ProductController::class, 'index']);
