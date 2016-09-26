import { Component } from '@angular/core';
import { RaceComponent } from '../race/race.component';
import { Race } from '../model/race';
import { RACES } from '../mocks';
import { NgModule } from "@angular/core/src/metadata/ng_module";

@NgModule({
  imports:      [ RaceComponent],
  declarations: [ RaceComponent ]
})

@Component({
    selector: 'race-list',
    templateUrl: 'race-list.component.html',
    styleUrls: ['race-list.component.css']
})
export class RaceListComponent {
    cash = 10000;
    races: Race[];

    totalCost() {
        return this.races.reduce((prev, current) => prev + (current.isRacing ? current.entryFee : 0), 0);
    };

    ngOnInit() {
        this.races = RACES;
    };

    cashLeft() {
        return this.cash - this.totalCost();
    };

}
