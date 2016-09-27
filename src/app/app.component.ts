import { Component } from '@angular/core';
import { RaceListComponent } from './race-list/race-list.component'
import { MenuItem } from './model/menuItem'
import { NgModule } from "@angular/core/src/metadata/ng_module";

@NgModule({
    declarations: [RaceListComponent]
})

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css']
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
