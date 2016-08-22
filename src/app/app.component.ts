import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {
    title = 'Ultra Racing Schedule';
    races = [{
        "id": 1,
        "name": "Daytona Thunderdome",
        "date": new Date('2512-01-04T14:00:00'),
        "about": "Race through the ruins of an ancient Florida battle arena.",
        "entryFee": 3200,
        "isRacing": false
    }, {
        "id": 2,
        "name": "San Francisco Ruins",
        "date": new Date('2512-07-03T20:00:00'),
        "about": "Drift down the streets of a city almost sunk under the ocean.",
        "entryFee": 4700,
        "isRacing": true
    }, {
        "id": 3,
        "name": "New York City Skyline",
        "date": new Date('2512-07-12T21:00:00'),
        "about": "Fly between buildings in the electronic sky.",
        "entryFee": 4300,
        "isRacing": true
    }];

    totalCost() {
        return this.races.reduce((prev, current) => prev + (current.isRacing ? current.entryFee : 0), 0);
    };
    // totalCarParts() {
    //     return this.carParts.reduce((prev, current) => prev + current.inStock, 0);
    //
    //     let sum = 0;
    //
    //     for(let carPart of this.carParts) {
    //         sum += carPart.inStock;
    //     }
    //
    //     return sum;
    // }
}