import { Injectable } from '@angular/core';
import { skills } from './skills';
import { Skill } from '@/shared/models/skill.module';

@Injectable({
  providedIn: 'root',
})
export class SkillServiceService {
  #skills: Skill[];

  constructor() {
    this.#skills = skills;
  }

  getSkills(): Skill[] {
    return this.#skills;
  }
}
