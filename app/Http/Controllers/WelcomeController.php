<?php

namespace App\Http\Controllers;

use App\Http\Resources\ProjectResource;
use App\Http\Resources\SkillResource;
use App\Models\Project;
use App\Models\Skill;
use GuzzleHttp\Psr7\Response;
use Illuminate\Http\Request;
use Inertia\Inertia;

class WelcomeController extends Controller
{
    public function welcome()
    {
        $skills = SkillResource::collection(Skill::all());
        $projects = ProjectResource::collection(Project::with('skills')->get());

        return Inertia::render('Welcome', compact('skills', 'projects'));
    }

    public function download() {

        $file= public_path('uploads/cv/KieuHoaLinh_CV_FullStack.docx');

        return response()->download($file, 'KieuHoaLinh_CV_FullStack.docx');
    }
}
