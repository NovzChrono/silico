<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class OriginsController extends Controller
{
    public function index()
    {
        $data = DB::table('origin')
            ->join('peporigin', 'origin.idOrigin', '=', 'peporigin.fkOrigin')
            ->select(DB::raw('count(fkPeptide) as countPeptide, nameOrigin, fkOrigin'))
            ->orderBy('nameOrigin')
            ->groupBy('fkOrigin')
            ->take(100)
            ->get();

        return Inertia::render('Admin/Origins',[
            'data' => $data
        ]);
    }
}
