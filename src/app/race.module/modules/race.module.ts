import { NgModule } from '@angular/core';

import { RaceRoutingModule } from '@app/race.module/modules/race-routing.module';
import { SharedModule } from '@app/core';

import { RaceCardListComponent } from '../components/race-card-list/race-card-list.component';
import { RacesComponent } from '../components/races/races.component';

@NgModule({
  declarations: [RacesComponent, RaceCardListComponent],
  imports: [
    RaceRoutingModule,
    SharedModule
  ],
  exports: []
})
export class RaceModule {}
