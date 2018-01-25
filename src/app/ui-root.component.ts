import { Component } from '@angular/core';
import { MenuItem } from './model/menuItem';

@Component({
  selector: 'ur-root',
  templateUrl: './ui-root.component.html',
  styleUrls: ['./ui-root.component.scss']
})
export class AppComponent {
  title = 'Ultra Racing';
  menu: MenuItem[] = [
    {
      title: 'home',
      path: '/home'
    },
    {
      title: 'races',
      path: '/races'
    },
    {
      title: 'shop',
      path: '/shop'
    },
    {
      title: 'garage',
      path: '/garage'
    },
    {
      title: '<i class="fa fa-user"></i>',
      path: '/profile'
    }];
}
