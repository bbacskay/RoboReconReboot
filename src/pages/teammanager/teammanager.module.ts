import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TeamManagerPage } from './teammanager';

@NgModule({
  declarations: [
    TeamManagerPage,
  ],
  imports: [
    IonicPageModule.forChild(TeamManagerPage),
  ],
})
export class TeamManagerPageModule {}
