import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {appRoutingProviders, routing} from './app.routes';

import {AppComponent} from './app.component';
import ComponentOne from './component-one';
import ComponentTwo from './component-two';
import ComponentAux from './component-aux';

@NgModule({
    imports: [
        BrowserModule,
        routing
    ],
    declarations: [
        AppComponent,
        ComponentOne,
        ComponentTwo,
        ComponentAux
    ],
    providers: [
        appRoutingProviders
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
