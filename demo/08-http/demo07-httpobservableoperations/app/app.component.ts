import {Component} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/Rx';

@Component({
    selector: 'app',
    template: `
	  <b>Angular 2 HTTP requests using RxJs Observables!</b>
	  
	  <div><code>{{doctors.toString()}}</code></div>
	  `
})

export class MyApp {
    private doctors = [];

    constructor(http: Http) {
        http.get('http://jsonplaceholder.typicode.com/users/')
            .flatMap((data) => data.json())
            .filter((person) => person.id > 3)
            .map((person) => "Dr. " + person.name)
            .subscribe((data) => {
                this.doctors.push(data);
            });
    }
}
