<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class CelcomponentsController extends Controller
{
    public function index()
    {
        $data = DB::table('cellcomponent')
            ->join('pepcellcomponent', 'cellcomponent.idCellComponent', '=', 'pepcellcomponent.fkCellComponent')
            ->select(DB::raw('count(fkPeptide) as countPeptide, descCellComponent as alias, fkCellComponent'))
            ->orderBy('descCellComponent')
            ->groupBy('fkCellComponent')
            ->get();
        return Inertia::render('Admin/CelComponents',[
            'data' => $data
        ]);
    }
}
