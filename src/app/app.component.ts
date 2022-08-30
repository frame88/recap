import { Component } from '@angular/core';
import { User } from './model/user';

@Component({
  selector: 'app-root',
  template: `
    <li *ngFor="let user of users">
      {{user.name}}
    </li>
  `,
  styles: []
})
export class AppComponent {
  users: User[] = [
    { id: 1, name: 'Fabio' },
    { id: 2, name: 'Simone' },
    { id: 3, name: 'Lorenzo' },
  ];
}