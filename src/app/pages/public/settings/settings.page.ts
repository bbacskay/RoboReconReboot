import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../../../services/settings.service';
import { Settings } from '../../../interfaces/settings';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  private appSettings: Settings;

  constructor(private settings: SettingsService) { 
  }

  ngOnInit() {
    this.settings.settings.subscribe((settingsdata) => {
      this.appSettings = settingsdata;
    })
  }

  save() {
    this.settings.save(this.appSettings);
  }

}
