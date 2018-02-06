import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from './modules/material.module';

import { RootComponent } from './root.component';
import { NavbarComponent } from './components/navigation/navbar/navbar.component';
import { HtmlSanitizerPipe } from './pipes/html-sanitizer';
import { RoutingModule } from './modules/routing.module';


@NgModule({
  declarations: [
    RootComponent,
    NavbarComponent,
    HtmlSanitizerPipe
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    FlexLayoutModule,
    MaterialModule,
    RoutingModule
  ],
  providers: [],
  bootstrap: [RootComponent]
})
export class AppModule { }
