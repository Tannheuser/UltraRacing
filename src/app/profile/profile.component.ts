import { Component, OnInit } from '@angular/core';
import {Profile} from "../model/profile";
import {PROFILE} from "../mocks";

@Component({
    selector: 'driver-profile',
    templateUrl: 'profile.component.html',
    styleUrls: ['profile.component.css']
})
export class ProfileComponent implements OnInit {
    driver: Profile;
    totalPenalty: number = 0;

    ngOnInit() {
        this.driver = PROFILE;
        this.totalPenalty = this.getTotalPenalty();
    }

    getTotalPenalty() {
        if(this.driver.penalties){
            return this.driver.penalties.reduce((prev, current) => prev + current.sum, 0);
        }

        return 0;
    }

}
