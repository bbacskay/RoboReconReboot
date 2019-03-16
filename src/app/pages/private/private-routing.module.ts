import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
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
  },
  {
    path: 'matchlist',
    loadChildren: './matchlist/matchlist.module#MatchlistPageModule'
  },
  { path: 'matchedit/:matchid', 
    loadChildren: './matchedit/matchedit.module#MatcheditPageModule' 
  },
  { path: 'matchadd/:matchno',
    loadChildren: './matchadd/matchadd.module#MatchaddPageModule' 
  },
  { path: 'scoutadd', 
    loadChildren: './scoutadd/scoutadd.module#ScoutaddPageModule' 
  },
  { path: 'scoutedit/:scoutid',
    loadChildren: './scoutedit/scoutedit.module#ScouteditPageModule' 
  },
  { path: 'scoutmonitor',
    loadChildren: './scoutmonitor/scoutmonitor.module#ScoutmonitorPageModule' }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrivateRoutingModule { }
