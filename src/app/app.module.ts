import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { GeneralModule } from './components/general/general.module';
import { HomeModule } from './components/home/home.module';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    GeneralModule,
    HomeModule,
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
