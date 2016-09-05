import { Component } from '@angular/core';
import { RaceListComponent } from './race-list/race-list.component'
import { MenuItem } from './model/menuItem'
import {ProfileComponent} from "./profile/profile.component";

@Component({
    moduleId: module.id,
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css'],
    directives: [RaceListComponent, ProfileComponent]
})
export class AppComponent {
  title = 'Ultra Racing';
  menu: MenuItem[] = [
    {
      title: 'home',
      active: false

    }, {
      title: 'races',
      active: false
    }, {
      title: 'shop',
      active: false
    }, {
      title: 'garage',
      active: false
    },{
      title: '<i class="fa fa-user"></i>',
      active: true
    }];
}
