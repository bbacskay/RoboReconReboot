import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../../../services/settings.service';
import { Settings } from '../../../interfaces/settings';
import { AlertService } from '../../../services/alert.service';
import { ThemeService } from '../../../services/theme.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  public appSettings: Settings;

  constructor(
    private settings: SettingsService,
    private alertService: AlertService,
    private themeService: ThemeService
    ) { 
  }

  ngOnInit() {
    this.settings.settings.subscribe((settingsdata) => {
      this.appSettings = settingsdata;
    })
  }

  public save() {
    this.settings.save(this.appSettings).then(() => {
      this.alertService.presentToast('Your settings have been saved.');
    });
  }

  public updateTheme() {
    this.themeService.setAppTheme(this.appSettings.darkMode);
    console.log('Dark theme: ' + this.appSettings.darkMode);
  }

}
