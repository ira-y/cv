import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatCardModule } from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { HeaderComponent } from './header/header.component';
import { SummaryComponent } from './summary/summary.component';
import { ContactsComponent } from './contacts/contacts.component';
import { CoursesComponent } from './courses/courses.component';
import { SkillsComponent } from './skills/skills.component';
import { SkillComponent } from './skill/skill.component';
import { ToArrayPipe } from './shared/pipes/to-array.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SummaryComponent,
    ContactsComponent,
    CoursesComponent,
    SkillsComponent,
    SkillComponent,
    ToArrayPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule, 
    MatButtonModule,
    MatMenuModule, 
    MatIconModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
