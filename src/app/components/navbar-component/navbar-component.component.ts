import { Component, OnInit } from '@angular/core';
import { MenuItem } from '../../model/menuItem';

@Component({
  selector: 'ur-navbar-component',
  templateUrl: './navbar-component.component.html',
  styleUrls: ['./navbar-component.component.scss']
})
export class NavbarComponentComponent implements OnInit {
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

  constructor() { }

  ngOnInit() {
  }
}
