import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeModule } from './components/home/home.module';
import { GeneralModule } from './components/general/general.module';
import { NgVerticalTimelineModule } from 'ng-vertical-timeline';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    HomeModule,
    GeneralModule,
    NgVerticalTimelineModule,
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
