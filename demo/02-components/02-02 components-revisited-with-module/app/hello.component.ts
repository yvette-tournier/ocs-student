import {Component} from '@angular/core';

@Component({
    selector: 'hello-component',
    template: '<p>Hello, {{name}}!</p>',
})
export class HelloComponent {
    name: string;

    constructor() {
        this.name = 'Universe';
    }
}
