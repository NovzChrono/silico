<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AdminController extends Controller
{
    public function shemadb()
    {
        return Inertia::render('Admin/SchemaDB');
    }
}
