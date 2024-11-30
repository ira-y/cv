import { Component, Input } from '@angular/core';
import { ISkill } from '../shared/interfaces/skill.interface';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrl: './skill.component.scss'
})
export class SkillComponent {
  @Input() title!: string;
  @Input() skills!: ISkill[];
  
}
