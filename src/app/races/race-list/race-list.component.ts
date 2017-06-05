import { Component, OnInit } from '@angular/core';
import { Race } from '../../model/race';
import { RACES } from '../../mock/races';

@Component({
  selector: 'ur-race-list',
  templateUrl: './race-list.component.html',
  styleUrls: ['./race-list.component.scss']
})
export class RaceListComponent implements OnInit {
  races: Race[];
  cash: number = 10000;
  constructor() { }

  ngOnInit() {
    this.races = RACES;
  }

  totalCost() {
    return this.races.reduce((prev, current) => prev + (current.isRacing ? current.entryFee : 0), 0);
  };

  cashLeft() {
    return this.cash - this.totalCost();
  };
}
