<?php

use App\Http\Controllers\CategoryController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// AOWKOAWKOAWK dah pake Inertia yah, bisa pake Inertia aja ketimbang Rest API
// Tapi meh coba dulu Rest API

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');

    Route::get('categories', [CategoryController::class, 'index'])->name('categories.index');
    Route::get('categories/create', [CategoryController::class, 'create'])->name('categories.create');
    Route::post('categories/create', [CategoryController::class, 'store'])->name('categories.store');
    Route::delete('categories/{id}', [CategoryController::class,'destroy'])->name('categories.destroy');
});

require __DIR__ . '/settings.php';
require __DIR__ . '/auth.php';
