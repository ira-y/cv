import { Component, OnInit } from '@angular/core';
import { ThemeService } from './services/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: false
})
export class AppComponent implements OnInit {
  isSidenavOpen = false;
  activeTabIndex = 0;
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

  onToggleSidenavContacts(): void {
    this.isSidenavOpen = true;
    this.activeTabIndex = 0;
  }

  onToggleSidenavTechnologies(): void {
    this.isSidenavOpen = true;
    this.activeTabIndex = 1;
  }

  closeSidenav(): void {
    this.isSidenavOpen = false;
  }

} 
