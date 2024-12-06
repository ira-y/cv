import { Component } from '@angular/core';
import { ThemeService } from '../services/theme.service';

@Component({
    selector: 'app-courses',
    templateUrl: './courses.component.html',
    styleUrl: './courses.component.scss',
    standalone: false
})
export class CoursesComponent {
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
