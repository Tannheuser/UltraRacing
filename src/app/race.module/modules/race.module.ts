import { FlexLayoutModule } from '@angular/flex-layout';
import { NgModule } from '@angular/core';

import { RaceRoutingModule } from '@app/race.module/modules/race-routing.module';
import { MaterialModule, SharedModule } from '@app/core';

import { RaceCardComponent } from '../components/race-card/race-card.component';
import { RaceCardListComponent } from '../components/race-card-list/race-card-list.component';
import { RacesComponent } from '../components/races/races.component';

@NgModule({
  declarations: [RacesComponent, RaceCardListComponent, RaceCardComponent],
  imports: [
    FlexLayoutModule,
    MaterialModule,
    RaceRoutingModule,
    SharedModule
  ],
  exports: []
})
export class RaceModule {}
