import { Component } from '@angular/core';
import { RaceComponent } from '../race/race.component'

@Component({
    moduleId: module.id,
    selector: 'race-list',
    templateUrl: 'race-list.component.html',
    styleUrls: ['race-list.component.css'],
    directives: [RaceComponent]
})
export class RaceListComponent {
    races = [
        {
            "id": 1,
            "name": "Daytona Thunderdome",
            "date": new Date('2512-01-04T14:00:00'),
            "about": "Race through the ruins of an ancient Florida battle arena.",
            "entryFee": 3200,
            "isRacing": false
        },
        {
            "id": 2,
            "name": "San Francisco Ruins",
            "date": new Date('2512-07-03T20:00:00'),
            "about": "Drift down the streets of a city almost sunk under the ocean.",
            "entryFee": 4700,
            "isRacing": true
        },
        {
            "id": 3,
            "name": "New York City Skyline",
            "date": new Date('2512-07-12T21:00:00'),
            "about": "Fly between buildings in the electronic sky.",
            "entryFee": 4300,
            "isRacing": true
        }
    ];

    totalCost() {
        return this.races.reduce((prev, current) => prev + (current.isRacing ? current.entryFee : 0), 0);
    };

}
