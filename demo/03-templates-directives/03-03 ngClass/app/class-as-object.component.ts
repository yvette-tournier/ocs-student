import {Component} from '@angular/core';

@Component({
    selector: 'app-class-as-object',
    template: `
    <p [ngClass]="{ card: true, dark: calculateddark, flat: flat }">
      <ng-content></ng-content>
    </p>
  `,
    styles: [`
    .card {
      border: 1px solid #eee;
      padding: 1rem;
      margin: 0.4rem;
      font-family: sans-serif;
      box-shadow: 2px 2px 2px #888888;
    }
    
    .dark {
      background-color: #444;
      border-color: #000;
      color: #fff;
    }
    
    .flat {
      box-shadow: none;
    }
  `]
})
export class ClassAsObjectComponent {
    flat = "";

    calculateddark: boolean = false;
}
