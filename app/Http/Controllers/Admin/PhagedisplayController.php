<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Phageexprpep;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class PhagedisplayController extends Controller
{
    public function index()
    {
        $data = DB::table('phageexprpep')
            ->select(DB::raw('count(fkPeptide) as countPeptide, pool123'))
            ->orderBy('pool123')
            ->groupBy('pool123')
            ->take(3000)
            ->get();
        return Inertia::render('Admin/PhageDisplay',[
            'data' => $data
        ]);
    }
}
