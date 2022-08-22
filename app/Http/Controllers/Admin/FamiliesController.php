<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Family;
use App\Models\Peptide;
use Illuminate\Http\Request;
use Inertia\Inertia;

class FamiliesController extends Controller
{
    public function index()
    {
        $dataFamily = Family::select('nameFamily')->get()->toArray();
        $data = array();
        $count = Family::all()->count();
        for ($i=0; $i < $count - 1; $i++) {
            $data[$i]= [$dataFamily[$i]['nameFamily'],Peptide::where('fkFamily',$i+1)->count()];
        }

        return Inertia::render('Admin/Families',[
            'peptides' => $data,
        ]);
    }
}
