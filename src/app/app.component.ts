import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {
    title = 'Ultra Racing Schedule';
    race = {
        id: 1,
        name: 'Daytona Thunderdome',
        date: new Date('2512-01-04T14:00:00'),
        about: 'Race through the ruins of an ancient Florida battle arena.',
        entryFee: 3200
    };
}
