import { Component } from '@angular/core';

@Component({
  selector: 'projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent {
  projects = [
    {
      id: 0,
      title: 'Personal website',
      content: 'Angular 10, Bootstrap, Html, CSS',
      date: '2021',
      icon: 'https://image.flaticon.com/icons/svg/214/214335.svg',
    },
    {
      id: 1,
      title: 'Interview Bot',
      content: 'Angular 8, Node.js, MySQL, Dialogflow',
      date: '2020 - 2021',
      icon: 'https://image.flaticon.com/icons/svg/1006/1006517.svg',
    },
  ];
}
