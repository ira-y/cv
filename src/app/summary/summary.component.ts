import { Component } from '@angular/core';
import { ThemeService } from '../services/theme.service';

@Component({
    selector: 'app-summary',
    templateUrl: './summary.component.html',
    styleUrl: './summary.component.scss',
    standalone: false
})
export class SummaryComponent {
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

