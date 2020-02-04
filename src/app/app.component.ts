import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { TeamDataService } from './services/team-data.service';
import { AuthenticationService } from './services/authentication.service';
import { SettingsService } from './services/settings.service';
import { MatchDataService } from './services/match-data.service';
import { EventsService } from './services/events.service';
import { ConfigService } from './services/config.service';
import { ThemeService } from './services/theme.service';
import { SeasonsService } from './services/seasons.service';

const privatePages = [
  {
    title: 'Match Scouting',
    url: '/private/matchscouting',
    icon: 'create'
  },
  {
    title: 'Monitor',
    url: '/private/scoutmonitor',
    icon: 'eye'
  },
  {
    title: 'Configuration',
    url: '/private/configuration',
    icon: 'settings'
  },
  {
    title: 'Season Manager',
    url: '/private/seasonlist',
    icon: 'calendar'
  },
  {
    title: 'Event Manager',
    url: '/private/eventlist',
    icon: 'pin'
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
    url: '/home',
    icon: 'home'
  },
  {
    title: 'Settings',
    url: '/settings',
    icon: 'settings'
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
    private matchDataService: MatchDataService,
    private seasonsService: SeasonsService,
    private eventsService: EventsService,
    private configService: ConfigService,
    private router: Router,
    private themeService: ThemeService
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.settingsService.load().then(() => {
        console.log('Settings loaded');

        this.themeService.setAppTheme(this.settingsService.settings.value.darkMode);

        this.authenticationService.authenticationState.subscribe(state => {
          if (state) {
            this.router.navigate(['private', 'matchscouting']);
            this.appPages = privatePages;

            this.configService.load().then(() => {
              this.matchDataService.load(this.configService.config.selectedEvent, 'qm');
            });

            this.seasonsService.load().then(() => {
              this.eventsService.load(this.configService.config.selectedSeason);
            });

            this.teamDataService.load();

          } else {
            this.router.navigate(['home']);
            this.appPages = publicPages;
          }
        });
      });

      this.statusBar.styleDefault();
      this.splashScreen.hide();



    });
  }

  logout() {
    this.authenticationService.logout();
  }

  isAuthenticated() {
    return this.authenticationService.isAuthenticated();
  }

}
