import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { RootComponent } from './ur-root.component';
import { RaceComponent } from './races/race/race.component';
import { RaceListComponent } from './races/race-list/race-list.component';

@NgModule({
  declarations: [
    RootComponent,
    RaceComponent,
    RaceListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [RootComponent]
})
export class RacingModule { }
