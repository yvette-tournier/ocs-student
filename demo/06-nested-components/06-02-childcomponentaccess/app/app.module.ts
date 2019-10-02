import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {ProfileComponent} from './profile.component';

@NgModule({
    imports: [
        BrowserModule
    ],
    declarations: [
        AppComponent,
        ProfileComponent
    ],
    exports: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule {
}
