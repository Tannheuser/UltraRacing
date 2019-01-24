import { Component, OnInit } from '@angular/core';

import { Race } from '@app/races/model';
import { Races } from '@app/mock';

@Component({
  selector: 'ur-races',
  templateUrl: './races.component.html',
  styleUrls: ['./races.component.scss']
})
export class RacesComponent implements OnInit {
  races: Race[];

  constructor() { }

  ngOnInit() {
    this.races = Races.reverse(race => race.date);
  }
}
