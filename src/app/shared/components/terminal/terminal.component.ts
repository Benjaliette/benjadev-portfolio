import { SkillServiceService } from '@/core/skills/skills.service';
import { Component, inject, OnInit } from '@angular/core';
import { Skill } from '@/shared/models/skill.module';

@Component({
  selector: 'app-terminal',
  standalone: true,
  imports: [],
  templateUrl: './terminal.component.html',
  styleUrl: './terminal.component.scss',
})
export class TerminalComponent implements OnInit {
  #skillService = inject(SkillServiceService);

  skills!: Skill[];

  ngOnInit(): void {
    this.skills = this.#skillService.getSkills();
  }
}
