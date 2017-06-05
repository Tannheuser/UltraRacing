import { Component, OnInit } from '@angular/core';
import {Race } from '../../model/race';

@Component({
  selector: 'ur-race',
  templateUrl: './race.component.html',
  styleUrls: ['./race.component.scss']
})
export class RaceComponent implements OnInit {
  private Race: Race;
  constructor() { }

  ngOnInit() {
  }

}
