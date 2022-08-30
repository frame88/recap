import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>{{today}}</h1>
    <h1>{{today | date: 'dd MMMM YYYY'}}</h1>
    <h1>{{yourmoney | currency}}</h1>
    <h1>{{yourbitcoins | number: '2.2-4'}}</h1>
    <pre>{{yourJSON | json}}</pre>
  `,
  styles: []
})
export class AppComponent {
  today = Date.now();
  yourmoney = 1200;
  yourbitcoins = 0.12343242;
  yourJSON = { id: 1, name: 'Fabio' };
}