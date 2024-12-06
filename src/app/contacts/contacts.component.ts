import { Component } from '@angular/core';
import { ThemeService } from '../services/theme.service';

@Component({
    selector: 'app-contacts',
    templateUrl: './contacts.component.html',
    styleUrl: './contacts.component.scss',
    standalone: false
})
export class ContactsComponent {
    darkTheme: boolean = false;

    constructor(private isDarkTheme: ThemeService) {}

    ngOnInit(): void {
        this.setTheme();
      }

    setTheme(): void {
        this.isDarkTheme.currentTheme$.subscribe(value => {
            this.darkTheme = value;
        })
    }
}
