import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [HeaderComponent, FooterComponent],
  exports: [HeaderComponent, FooterComponent],
})
export class GeneralModule {}
