import { Component, Input } from '@angular/core';

@Component({
    selector: 'race',
    templateUrl: 'race.component.html',
    styleUrls: ['race.component.css']
})
export class RaceComponent {
    @Input()
    race: any
}
