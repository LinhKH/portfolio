<?php

namespace App\Http\Controllers;

use App\Http\Resources\ProjectResource;

use App\Models\Project;
use App\Models\ProjectSkill;
use App\Models\Skill;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class ProjectController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $projects = ProjectResource::collection(Project::with('skills')->get());
        return Inertia::render('Projects/Index', compact('projects'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $skills = Skill::all();
        return Inertia::render('Projects/Create', compact('skills'));
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {

        $request->validate([
            'image' => ['required', 'image'],
            'name' => ['required', 'min:3'],
            'skills' => ['required', 'exists:skills,id'],
        ]);

        $skills = $request['skills'] ?? [];

        if ($request->hasFile('image')) {
            $image = $request->file('image')->store('projects');

            $project = Project::create([
                'name' => $request->name,
                'image' => $image,
                'project_url' => $request->project_url
            ]);

            $this->saveSkills($skills, $project);

            return Redirect::route('projects.index')->with('message', 'Project created successfully.');
        }
        return Redirect::back();
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Project $project)
    {
        $project = $project->load('skills');
        $project->image = asset('/storage/' . $project->image);
        $skills = Skill::all();
        return Inertia::render('Projects/Edit', compact('project', 'skills'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Project $project)
    {
        $image = $project->image;

        $request->validate([
            'name' => ['required', 'min:3'],
            'skills' => ['required', 'exists:skills,id'],
        ]);

        $skills = $request['skills'] ?? [];

        if ($request->hasFile('image')) {
            Storage::delete($project->image);
            $image = $request->file('image')->store('projects');
        }

        $project->update([
            'name' => $request->name,
            'project_url' => $request->project_url,
            'image' => $image
        ]);
        

        $this->saveSkills($skills, $project);

        return Redirect::route('projects.index')->with('message', 'Project updated successfully.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Project $project)
    {
        Storage::delete($project->image);
        $project->delete();
        return Redirect::back()->with('message', 'Project deleted successfully.');
    }

    private function saveSkills($skillsIds, Project $project)
    {
        ProjectSkill::where('project_id', $project->id)->delete();
        $data = array_map(fn($id) => (['skill_id' => $id, 'project_id' => $project->id]), $skillsIds);

        ProjectSkill::insert($data);
    }
}
