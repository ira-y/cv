import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../services/theme.service';

@Component({
	selector: 'app-contacts',
	templateUrl: './contacts.component.html',
	styleUrl: './contacts.component.scss',
	standalone: false
})
export class ContactsComponent implements OnInit {
	darkTheme = false;

	constructor(private isDarkTheme: ThemeService) { }

	ngOnInit() {
		this.setTheme();
	}

	setTheme(): void {
		this.isDarkTheme.currentTheme$.subscribe(value => {
			this.darkTheme = value;
		})
	}
}
