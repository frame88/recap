import { Component } from '@angular/core';
import { Utility } from './services/utility';

@Component({
  selector: 'app-root',
  template: `
    <h1>Hello World</h1>
  `
})
export class AppComponent {
  constructor(utils: Utility) {
    const response = utils.add(1, 4)
    console.log(response);
  }
}