import {Component, ViewEncapsulation} from '@angular/core';

@Component({
    selector: 'app-hello-native',
    template: `
	  <p class="hello2 other-hello">
	    <code>Native / .hello:</code>
	    Hello World
	  </p>`,
    styles: [` .hello2 { font-weight: bold; } `],
    encapsulation: ViewEncapsulation.Native
})
export class HelloNativeComponent {
    name = 'World';
}
