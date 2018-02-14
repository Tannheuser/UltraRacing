import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SharedModule } from '@app/core';

import { RacesComponent } from './components/races/races.component';

const routes: Routes = [
  { path: '', component: RacesComponent }
];

@NgModule({
  declarations: [RacesComponent],
  imports: [
    RouterModule.forChild(routes),
    SharedModule
  ],
  exports: []
})
export class RaceModule {}
