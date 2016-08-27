import { Component } from '@angular/core';
import { RaceListComponent } from './race-list/race-list.component'

@Component({
    moduleId: module.id,
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css'],
    directives: [RaceListComponent]
})
export class AppComponent {
    title = 'Ultra Racing';
}