<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Bioprocess;
use App\Models\Cellcomponent;
use App\Models\Family;
use App\Models\Keyword;
use App\Models\Molfunction;
use App\Models\Origin;
use App\Models\Peptide;
use App\Models\Phageexprpep;
use App\Models\Reference;
use App\Models\Structure3d;
use App\Models\Syntheticpep;
use App\Models\Target;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProteinsController extends Controller
{
    public function index()
    {
        $peptide= Peptide::count();
        $family = Family::count();
        $molfunction = Molfunction::count();
        $celcomponent = Cellcomponent::count();
        $bioprocess = Bioprocess::count();
        $syntheticpep = Syntheticpep::count();
        $phageexprpep = Phageexprpep::count();
        $origin = Origin::count();
        $keyword = Keyword::count();
        $target = Target::count();
        $structure3d = Structure3d::count();
        $reference = Reference::count();

        return Inertia::render('Admin/Proteins', [
            'peptide' => $peptide,
            'family' => $family,
            'molfunction' => $molfunction,
            'celcomponent' => $celcomponent,
            'bioprocess' => $bioprocess,
            'syntheticpep' => $syntheticpep,
            'phageexprpep' => $phageexprpep,
            'origin' => $origin,
            'keyword' => $keyword,
            'target' => $target,
            'structure3d' => $structure3d,
            'reference' => $reference,
        ]);
    }
}
