import {Component, ViewEncapsulation} from '@angular/core';

@Component({
    selector: 'app-hello-emulated',
    template: `
	  <p class="hello2">
	    <code>Emulated / .hello:</code>
      Hello World
    </p>`,
    styles: [`
    .hello2 { color: green; }	  
	`],
    encapsulation: ViewEncapsulation.Emulated
})
export class HelloEmulatedComponent {
    name = 'World';
}
