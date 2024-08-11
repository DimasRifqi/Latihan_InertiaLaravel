<?php

use App\Http\Controllers\MahasiswaController;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

Route::get('/mahasiswa/add', [MahasiswaController::class, 'formAdd']);
// Route::get('/mahasiswa/{id}', [MahasiswaController::class, 'show']);
Route::resource('/mahasiswa', MahasiswaController::class);