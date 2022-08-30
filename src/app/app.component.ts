import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <button (click)="load()">load</button>
    <button (click)="unload()">unload</button>
    <img *ngIf="url" [src]="url" alt="">

  `,
})

export class AppComponent {
  title = 'recap';

  url : string;

  load() {
    this.url = 'https://www.collinsdictionary.com/images/full/computer_49399603.jpg';
  }

  unload() {
    this.url = null;
  }
  
}

// styles: [` h1{ background-color: red;} `]

