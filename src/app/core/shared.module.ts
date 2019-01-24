import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HtmlSanitizerPipe } from '@app/core/pipes';

@NgModule({
  declarations: [
    HtmlSanitizerPipe
  ],
  exports: [
    CommonModule,
    FormsModule,
    RouterModule
  ]
})
export class SharedModule {
}
