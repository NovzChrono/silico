<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class BioprocessesController extends Controller
{
    public function index()
    {
        $data = DB::table('bioprocess')
            ->join('pepbioprocess', 'bioprocess.idBioProcess', '=', 'pepbioprocess.fkBioProcess')
            ->select(DB::raw('count(fkPeptide) as countPeptide, descBioProcess as alias, fkBioProcess'))
            ->groupBy('fkBioProcess')
            ->get();
        return Inertia::render('Admin/BioProcesses',[
            'data' => $data
        ]);
    }
}
