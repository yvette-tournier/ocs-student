import {Component} from '@angular/core';

@Component({
    selector: 'component-two',
    template: `
    <p>Component Two</p>
    
    <nav>
      <a [routerLink]="['child-one']">Child One</a>
      <a [routerLink]="['child-two']">Child Two</a>
    </nav>
    
    <div style="color: red; margin-top: 1rem;">
      Component Two's router outlet:
    </div>
    <div style="border: 2px solid red; padding: 1rem;">
      <router-outlet></router-outlet>
    </div>
  `,
})
export default class ComponentTwo {
}
