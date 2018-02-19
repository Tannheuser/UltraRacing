import { Component, Input, OnInit } from '@angular/core';
import { Race } from '@app/race.module/model/race';

@Component({
  selector: 'ur-race-card-list',
  templateUrl: './race-card-list.component.html',
  styleUrls: ['./race-card-list.component.scss']
})
export class RaceCardListComponent implements OnInit {
  @Input() races: Race[];

  constructor() { }

  ngOnInit() {
  }

}
