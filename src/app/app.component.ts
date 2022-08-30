import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1 (click)="clickhandler($event)">{{esempio}}</h1>
  `,
})

export class AppComponent {
  title = 'recap';
  
  esempio = 'stringaesempio';

  clickhandler(event: MouseEvent) {
    console.log('click', event);
  }

  
}

// styles: [` h1{ background-color: red;} `]

