import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { TeamDataService } from './services/team-data.service';
import { AuthenticationService } from './services/authentication.service';
import { SettingsService } from './services/settings.service';

const privatePages = [
  {
    title: 'Match Scouting',
    url: '/private/matchscouting',
    icon: 'create'
  },
  {
    title: 'Configuration',
    url: '/private/configuration',
    icon: 'settings'
  },
  {
    title: 'Team Manager',
    url: '/private/teammanager',
    icon: 'people'
  },
  {
    title: 'Scout Manager',
    url: '/private/scoutmanager',
    icon: 'contacts'
  },
  {
    title: 'Match list',
    url: '/private/matchlist',
    icon: 'trophy'
  }
];

const publicPages = [
  {
    title: 'Home',
    url:   '/home',
    icon:  'home'
  },
  {
    title: 'Settings',
    url:   '/settings',
    icon:  'settings'
  },
  {
    title: 'Login',
    url: '/login',
    icon: 'log-in'
  }
];

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  

  public appPages = publicPages;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private teamDataService: TeamDataService,
    private authenticationService: AuthenticationService,
    private settingsService: SettingsService,
    private router: Router
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.settingsService.load().then(() => {
        console.log('Settings loaded');
        this.teamDataService.load();
      });
      
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      this.authenticationService.authenticationState.subscribe(state => {
        if (state) {
          this.router.navigate(['private', 'matchscouting']);
          this.appPages = privatePages;
        } else {
          this.router.navigate(['home']);
          this.appPages = publicPages;
        }
      });

    });
  }

  logout() {
    this.authenticationService.logout();
  }

  isAuthenticated() {
    return this.authenticationService.isAuthenticated();
  }

}
