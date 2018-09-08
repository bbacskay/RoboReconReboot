import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { TeamDataService } from './services/team-data.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Match Scouting',
      url: '/matchscouting',
      icon: 'create'
    },
    {
      title: 'Configuration',
      url: '/configuration',
      icon: 'settings'
    },
    {
      title: 'Team Manager',
      url: '/teammanager',
      icon: 'people'
    },
    {
      title: 'Scout Manager',
      url: '/scoutmanager',
      icon: 'contacts'
    }
    
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private teamDataService: TeamDataService
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.teamDataService.load();
      
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
