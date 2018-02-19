import { Component, Input, OnInit } from '@angular/core';

import { Race } from '@app/race.module/model/race';

@Component({
  selector: 'ur-race-card',
  templateUrl: './race-card.component.html',
  styleUrls: ['./race-card.component.scss']
})
export class RaceCardComponent implements OnInit {
  @Input() race: Race;
  constructor() { }

  ngOnInit() {
  }
}
