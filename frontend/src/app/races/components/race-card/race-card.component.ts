import { Component, Input, OnInit } from '@angular/core';

import { Race } from '@app/races/model';

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
