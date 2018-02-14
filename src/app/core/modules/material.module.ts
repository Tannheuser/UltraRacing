import { NgModule } from '@angular/core';
import { MatButtonModule, MatIconModule, MatToolbarModule } from '@angular/material';

const modules = [
  MatButtonModule,
  MatIconModule,
  MatToolbarModule
];

@NgModule({
  exports: modules
})
export class MaterialModule {}
