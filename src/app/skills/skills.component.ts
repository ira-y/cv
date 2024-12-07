import { Component } from '@angular/core';
import user from '../../assets/data/user.json';

@Component({
    selector: 'app-skills',
    templateUrl: './skills.component.html',
    standalone: false
})
export class SkillsComponent {
  userData = user;

  trackByIndex (index: number): number {
    return index;
  } 
}
