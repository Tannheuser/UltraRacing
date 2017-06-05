import { Component } from '@angular/core';
import { MenuItem } from './model/menuItem';

@Component({
  selector: 'ur-root',
  templateUrl: './ur-root.component.html',
  styleUrls: ['./ur-root.component.scss']
})
export class RootComponent {
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

