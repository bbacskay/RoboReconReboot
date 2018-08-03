import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'matchscouting',
    loadChildren: './matchscouting/matchscouting.module#MatchscoutingPageModule'
  },
  { 
    path: 'configuration',
    loadChildren: './configuration/configuration.module#ConfigurationPageModule'
  },
  {
    path: 'scoutmanager',
    loadChildren: './scoutmanager/scoutmanager.module#ScoutmanagerPageModule'
  },
  {
    path: 'teammanager',
    loadChildren: './teammanager/teammanager.module#TeammanagerPageModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
