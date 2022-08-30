import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <button (click)="toggle()">Clicca</button>
    <h1 *ngIf="visible">Hello world</h1>
  `,
})

export class AppComponent {
  title = 'recap';
  
  visible = false;

  toggle() {
    this.visible = !this.visible;
  }

}

// styles: [` h1{ background-color: red;} `]

