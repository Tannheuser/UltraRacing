import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../core/modules/material.module';

import { RootComponent } from './components/root.component';
import { NavbarComponent } from './components/navigation/navbar/navbar.component';
import { RoutingModule } from './routing.module';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    HomeComponent,
    NavbarComponent,
    RootComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FlexLayoutModule,
    MaterialModule,
    RoutingModule
  ],
  providers: [],
  bootstrap: [RootComponent]
})
export class AppModule { }
