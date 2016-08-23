import { Component } from '@angular/core';
import { RaceComponent } from '../race/race.component';
import { Race } from '../model/race';
import { RACES } from '../mocks';

@Component({
    moduleId: module.id,
    selector: 'race-list',
    templateUrl: 'race-list.component.html',
    styleUrls: ['race-list.component.css'],
    directives: [RaceComponent]
})
export class RaceListComponent {
    races: Race[];

    totalCost() {
        return this.races.reduce((prev, current) => prev + (current.isRacing ? current.entryFee : 0), 0);
    };

    ngOnInit() {
        this.races = RACES;
    }

}
