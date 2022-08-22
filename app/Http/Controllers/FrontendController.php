<?php

namespace App\Http\Controllers;

use App\Models\Peptide;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

class FrontendController extends Controller
{
    public function index()
    {
        $peptides = Peptide::take(55)->get();
        return Inertia::render('Welcome',[
            'canLogin' => Route::has('login'),
            'canRegister' => Route::has('register'),
            'peptides' => $peptides
        ]);
    }
    public function contact()
    {
        return Inertia::render('Contact',[
            'canLogin' => Route::has('login'),
            'canRegister' => Route::has('register'),
        ]);
    }
    public function a()
    {
        $peptides = Peptide::take(5)->get();
        return $peptides->toArray();

    }
}
