import { Injectable } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SettingsService } from './settings.service';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  darkMode = false;

  constructor(private plt: Platform, private settingsService: SettingsService) {

    this.plt.ready().then(() => {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)");
      prefersDark.addListener(e => {
        this.setAppTheme(e.matches);
      });

      // Load/set saved setting
      this.setAppTheme(this.settingsService.settings.value.darkMode);

    });
  }

  setAppTheme(dark: boolean) {
    this.darkMode = dark;

    if (this.darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }
}

