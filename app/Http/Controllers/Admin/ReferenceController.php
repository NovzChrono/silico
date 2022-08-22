<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ReferenceController extends Controller
{
    public function index()
    {
        dd('salut');
        return Inertia::render('Admin/References');
    }
}
