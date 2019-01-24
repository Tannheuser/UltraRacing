import { NgModule } from '@angular/core';

import { RaceRoutingModule } from './race-routing.module';
import { MaterialModule, SharedModule } from '@app/core';

import { RaceCardComponent, RaceCardListComponent, RacesComponent } from '@app/races/components';

@NgModule({
  declarations: [
    RacesComponent,
    RaceCardListComponent,
    RaceCardComponent],
  imports: [
    MaterialModule,
    RaceRoutingModule,
    SharedModule
  ]
})
export class RaceModule {}
