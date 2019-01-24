import { Component, OnInit } from '@angular/core';
import orderBy from 'lodash-es/orderBy';

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
    this.races = orderBy(Races, ['date']);
  }
}
