import { Component } from '@angular/core';
import { MenuItem } from './model/menuItem';

@Component({
  selector: 'racing-root',
  templateUrl: './racing-root.component.html',
  styleUrls: ['./racing-root.component.scss']
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

