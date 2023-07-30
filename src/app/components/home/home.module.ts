import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AboutComponent } from './about/about.component';
import { SkillsComponent } from './skills/skills.component';
import { ExpComponent } from './exp/exp.component';
import { ProjectsComponent } from './projects/projects.component';
import { HomeComponent } from './home.component';
import { GeneralModule } from '../general/general.module';

@NgModule({
  imports: [CommonModule, FormsModule, GeneralModule],
  declarations: [
    AboutComponent,
    SkillsComponent,
    ExpComponent,
    ProjectsComponent,
    HomeComponent,
  ],
  exports: [
    AboutComponent,
    SkillsComponent,
    ExpComponent,
    ProjectsComponent,
    HomeComponent,
  ],
})
export class HomeModule {}
