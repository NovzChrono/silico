<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class StructureController extends Controller
{
    public function index()
    {
        $data = DB::table('structure3d')
            ->join('pep3dstructure', 'structure3d.idStructure3D', '=', 'pep3dstructure.fkStructure3D')
            ->select(DB::raw('count(fkPeptide) as countPeptide, fkPDB, fkStructure3D'))
            ->groupBy('fkStructure3D')
            ->get();
        return Inertia::render('Admin/Structure',[
            'data' => $data
        ]);
    }
}
