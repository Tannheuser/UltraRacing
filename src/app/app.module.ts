import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from './modules/material.module';

import { RootComponent } from './root.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HtmlSanitizerPipe } from './pipes/html-sanitizer';

const routes: Routes = [
  { path: '', component: RootComponent }];

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
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [RootComponent]
})
export class AppModule { }
