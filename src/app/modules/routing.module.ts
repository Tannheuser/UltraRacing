import { NgModule } from '@angular/core';
import { RootComponent } from '../root.component';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: RootComponent },
  { path: 'races', loadChildren: './modules/race.module#RaceModule'}];


@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [
    RouterModule
  ]
})
export class RoutingModule {}
