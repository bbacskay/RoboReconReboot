import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { MatchScoutingPage } from '../pages/matchScouting/matchScouting'
import { ConfigurationPage } from '../pages/configuration/configuration'
import { TeamManagerPage } from '../pages/teammanager/teammanager';
import { ScoutManagerPage } from '../pages/scoutmanager/scoutmanager';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';




@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MatchScoutingPage,
    ConfigurationPage,
    TeamManagerPage,
    ScoutManagerPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MatchScoutingPage,
    ConfigurationPage,
    TeamManagerPage,
    ScoutManagerPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
