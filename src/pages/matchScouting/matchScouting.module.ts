import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MatchScoutingPage } from './matchScouting';

@NgModule({
  declarations: [
    MatchScoutingPage,
  ],
  imports: [
    IonicPageModule.forChild(MatchScoutingPage),
  ],
})
export class MatchScoutingPageModule {}
