import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { routing } from './app.routing'

import { AppComponent } from './app.component';
import { RaceListComponent } from "./race-list/race-list.component";
import { RaceComponent } from "./race/race.component";
import { ProfileModule } from "./profile/profile.module";

@NgModule({
    declarations: [
        AppComponent,
        RaceListComponent,
        RaceComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        ProfileModule,
        routing
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
