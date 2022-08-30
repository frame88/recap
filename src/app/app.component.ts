import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <button [disabled]='url' (click)="load()">load</button>
    <button [disabled]='!url' (click)="unload()">unload</button>
    <img *ngIf="url" [src]="url" alt="">
     <app-hello></app-hello>
     <app-hello></app-hello>
     <app-hello></app-hello>
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

