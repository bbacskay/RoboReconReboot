import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ScoutManagerPage } from './scoutmanager';

@NgModule({
  declarations: [
    ScoutManagerPage,
  ],
  imports: [
    IonicPageModule.forChild(ScoutManagerPage),
  ],
})
export class ScoutmanagerPageModule {}
