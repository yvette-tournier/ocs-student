import {Component, Input} from '@angular/core';

@Component({
    selector: 'hello-component',
    template: '<p>Hello, {{name}}!</p>',
})
export class HelloComponent {
    @Input() name: string;
}
