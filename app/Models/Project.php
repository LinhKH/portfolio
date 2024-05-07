<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    use HasFactory;
    protected $fillable = ['id','name', 'image', 'project_url'];

    public function skills() {
        return $this->belongsToMany(Skill::class, 'project_skills', 'project_id', 'skill_id');
    }
}
