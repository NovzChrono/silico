<?php

use App\Http\Controllers\Admin\AdminController;
use App\Http\Controllers\Admin\BioprocessesController;
use App\Http\Controllers\Admin\CelcomponentsController;
use App\Http\Controllers\Admin\FamiliesController;
use App\Http\Controllers\Admin\KeywordController;
use App\Http\Controllers\Admin\MolfunctionsController;
use App\Http\Controllers\Admin\OriginsController;
use App\Http\Controllers\Admin\PeptidesController;
use App\Http\Controllers\Admin\PhagedisplayController;
use App\Http\Controllers\Admin\ProteinsController;
use App\Http\Controllers\Admin\ReferenceController;
use App\Http\Controllers\Admin\StructureController;
use App\Http\Controllers\FrontendController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', [FrontendController::class,'index'])->name('home');
Route::get('/contact', [FrontendController::class,'contact'])->name('contact');
Route::get('/a', [FrontendController::class,'a']);

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::get('/dbshema',[AdminController::class,'shemadb'] )->middleware(['auth', 'verified'])->name('dbschema');
Route::get('/proteins',[ProteinsController::class,'index'] )->middleware(['auth', 'verified'])->name('proteins');
Route::get('/origins',[OriginsController::class,'index'] )->middleware(['auth', 'verified'])->name('origins');
Route::get('/keywords',[KeywordController::class,'index'] )->middleware(['auth', 'verified'])->name('keywords');
Route::get('/references',[ReferenceController::class,'index'] )->middleware(['auth', 'verified'])->name('references');
Route::get('/peptides',[PeptidesController::class,'index'] )->middleware(['auth', 'verified'])->name('peptides');
Route::get('/phagedisplay',[PhagedisplayController::class,'index'] )->middleware(['auth', 'verified'])->name('phagedisplay');
Route::get('/molfunctions',[MolfunctionsController::class,'index'] )->middleware(['auth', 'verified'])->name('molfunctions');
Route::get('/celcomponents',[CelcomponentsController::class,'index'] )->middleware(['auth', 'verified'])->name('celcomponents');
Route::get('/bioprocesses',[BioprocessesController::class,'index'] )->middleware(['auth', 'verified'])->name('bioprocesses');
Route::get('/families',[FamiliesController::class,'index'] )->middleware(['auth', 'verified'])->name('families');
Route::get('/structure',[StructureController::class,'index'] )->middleware(['auth', 'verified'])->name('structure');

require __DIR__.'/auth.php';
