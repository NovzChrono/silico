<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class MolfunctionsController extends Controller
{
    public function index()
    {
        $data = DB::table('molfunction')
            ->join('pepmolfunction', 'molfunction.idMolFunction', '=', 'pepmolfunction.fkMolFunction')
            ->select(DB::raw('count(fkPeptide) as countPeptide, descMolFunction as alias, fkMolFunction'))
            ->orderBy('descMolFunction')
            ->groupBy('fkMolFunction')
            ->get();
        return Inertia::render('Admin/MolFunctions',[
            'data' => $data
        ]);
    }
}
