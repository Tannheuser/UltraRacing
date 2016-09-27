import { ModuleWithProviders } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { ProfileComponent } from "./profile/profile.component";
import { RaceListComponent } from "./race-list/race-list.component";

const appRoutes: Routes = [
    {
        path: 'races',
        component: RaceListComponent
    },
    {
        path: 'profile',
        component: ProfileComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);