import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './ui-root.component';
import { NavbarComponentComponent } from './components/navbar-component/navbar-component.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class UiRootModule { }
