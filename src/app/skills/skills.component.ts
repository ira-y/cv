import { Component } from '@angular/core';
import user from '../../assets/data/user.json';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  userData = user;
}
