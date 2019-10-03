import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {appRoutingProviders, routing} from './app.routes';

import AppComponent from './app.component';
import ComponentOne from './component-one';


@NgModule({
    imports: [
        BrowserModule,
        routing
    ],
    declarations: [
        AppComponent,
        ComponentOne
    ],
    providers: [
        appRoutingProviders
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
