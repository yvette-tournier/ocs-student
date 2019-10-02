import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {MyApp} from './app.component'
import {FormsModule, ReactiveFormsModule} from '@angular/forms'

@NgModule({
    imports: [BrowserModule, ReactiveFormsModule, FormsModule],
    declarations: [MyApp],
    bootstrap: [MyApp]
})
export class MyAppModule {

}
