import {Component} from '@angular/core';

@Component({
    selector: 'app',
    template: `
    <nav>
      <a [routerLink]="['/component-one']">Component One</a>
      <a [routerLink]="['/component-two', 111]">Component Two</a>
      <a [routerLink]="['/component-two', 222]">Component Two</a>
    </nav>

    <div style="color: green; margin-top: 1rem;">Outlet:</div>
    <div style="border: 2px solid green; padding: 1rem;">
      <router-outlet></router-outlet>
    </div>
  `
})
export class AppComponent {

    // constructor (private router: Router) {}
    //
    // onClick () {
    //   this.router.navigate(['/component-two', 456]);
    // }
}
