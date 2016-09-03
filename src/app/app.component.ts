import { Component } from '@angular/core';
import { RaceListComponent } from './race-list/race-list.component'
import { MenuItem } from './model/menuItem'

@Component({
    moduleId: module.id,
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css'],
    directives: [RaceListComponent]
})
export class AppComponent {
  title = 'Ultra Racing';
  menu: MenuItem[] = [
    {
      title: 'home',
      active: true

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
      active: false
    }];
}
