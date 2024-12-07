import { Component, EventEmitter, Output } from '@angular/core';
import { ThemeService } from '../services/theme.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  standalone: false
})
export class HeaderComponent {
  @Output() isDarkThemeSend = new EventEmitter<boolean>();
  @Output() toggleSidenav = new EventEmitter<void>();
  @Output() openTechnologies = new EventEmitter<void>();

  isDarkTheme = false;

  constructor(private themeService: ThemeService) { }

  onToggleSidenavContacts(): void {
    this.toggleSidenav.emit();
  }

  onToggleSidenavTechnologies(): void {
    this.openTechnologies.emit();
  }

  toggleTheme() {
    this.isDarkTheme = !this.isDarkTheme;
    this.themeService.toggleTheme(this.isDarkTheme);
    this.isDarkThemeSend.emit(this.isDarkTheme);
  }
}