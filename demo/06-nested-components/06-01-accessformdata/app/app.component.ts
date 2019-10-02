import {Component} from '@angular/core';

@Component({
    selector: 'app-component',
    templateUrl: 'app/app.component.html'
})
export class AppComponent {
    formValue = '';

    onSubmit(form: any) {
        console.log(form)
        this.formValue = JSON.stringify(form.value);
    }
}
