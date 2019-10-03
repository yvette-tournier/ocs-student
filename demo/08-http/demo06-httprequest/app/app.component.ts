import {Component} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/Rx';

@Component({
    selector: 'app',
    template: `
	  <b>Angular 2 HTTP requests using RxJs Observables!</b>
	  <ul>
	    <li *ngFor="let doctor of doctors">{{doctor.name}}</li>
	  </ul>
	  `
})
export class MyApp {
    private doctors = [];

    constructor(http: Http) {
        http.get('http://jsonplaceholder.typicode.com/users/')
            .map((data) => {
                console.log(data);
                return data;
            })
            .flatMap((data) => data.json())
            .subscribe((data) => {
                console.log(data)
                this.doctors.push(data);

            });
    }
}
