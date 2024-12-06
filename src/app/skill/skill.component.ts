import { Component, Input } from '@angular/core';
import { ISkill } from '../shared/interfaces/skill.interface';
import { ThemeService } from '../services/theme.service';

@Component({
    selector: 'app-skill',
    templateUrl: './skill.component.html',
    styleUrl: './skill.component.scss',
    standalone: false
})
export class SkillComponent {
  @Input() title!: string;
  @Input() skills!: ISkill[];

  darkTheme: boolean = false;

  constructor(private isDarkTheme: ThemeService) {}
  
  trackByIndex (index: number): number {
    return index;
   } 

   ngOnInit(): void {
       this.setTheme();
     }

   setTheme(): void {
       this.isDarkTheme.currentTheme$.subscribe(value => {
           this.darkTheme = value;
       })
   }
}
