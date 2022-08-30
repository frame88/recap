import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>{{esempio}}</h1>
    <span>{{ esempio === 'stringa esempio' ? 'titolo' : 'altra stringa sconosciuta'}}</span>
    <h3>{{1+3*5}}</h3>
  `,
})
export class AppComponent {
  title = 'recap';

  esempio = 'stringaesempio'
}


// styles: [` h1{ background-color: red;} `]
