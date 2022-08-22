<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Syntheticpep;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PeptidesController extends Controller
{
    public function index()
    {
        $count_syntNum =Syntheticpep::all()->groupBy('synthNum')->count();
        $data = array();
        for ($i=0 ; $i < $count_syntNum ; $i++) {
            $data[$i] = Syntheticpep::where('synthNum',$i+1)->count();
        }
        return Inertia::render('Admin/Peptides',[
            'data' => $data
        ]);
    }
}
