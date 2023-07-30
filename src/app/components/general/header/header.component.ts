import { Component } from '@angular/core';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  name = [
    'S',
    'h',
    'r',
    'a',
    'd',
    'd',
    'h',
    'a',
    '_',
    'B',
    'i',
    'j',
    'o',
    't',
    'k',
    'a',
    'r',
  ];
  scroll(url: string) {
    let element = document.getElementById(url);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    console.log(element);
  }
}
