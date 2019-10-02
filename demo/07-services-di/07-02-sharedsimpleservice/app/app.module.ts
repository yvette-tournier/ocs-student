import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {SimpleService} from './simple.service';

@NgModule({
    imports: [BrowserModule],
    declarations: [
        AppComponent
    ],
    providers: [SimpleService],
    exports: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule {
}
