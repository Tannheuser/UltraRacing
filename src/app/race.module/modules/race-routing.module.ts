import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RacesComponent } from '@app/race.module/components/races/races.component';

const routes: Routes = [
  { path: '', component: RacesComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class RaceRoutingModule {}
