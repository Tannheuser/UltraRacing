import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RacesComponent } from '@app/races/components';

const routes: Routes = [
  { path: '', component: RacesComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class RaceRoutingModule {}
