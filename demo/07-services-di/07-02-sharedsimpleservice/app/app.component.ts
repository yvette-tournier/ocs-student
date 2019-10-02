import {Component} from '@angular/core';
import {SimpleService} from './simple.service';

@Component({
    selector: 'my-app',
    template: '<h3>{{ title }}</h3>'
})

export class AppComponent {
    title: string;

    constructor(private _simpleService: SimpleService) {
    }

    ngOnInit() {
        this.title = this._simpleService.someMethod();
    }
}
