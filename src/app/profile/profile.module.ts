import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { routing } from '../app.routing'

import { ProfileComponent } from "./profile.component";

@NgModule({
    imports: [ CommonModule, routing ],
    declarations: [ ProfileComponent ],
    exports: [ ProfileComponent ],
    providers: []
})
export class ProfileModule {}