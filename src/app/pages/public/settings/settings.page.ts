import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { SettingsService } from '../../../services/settings.service';
import { Settings } from '../../../interfaces/settings';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  private appSettings: Settings;

  constructor(private settings: SettingsService, private toastController: ToastController) { 
  }

  ngOnInit() {
    this.settings.settings.subscribe((settingsdata) => {
      this.appSettings = settingsdata;
    })
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Your settings have been saved.',
      animated: true,
      duration: 2000
    });
    toast.present();
  }

  save() {
    this.settings.save(this.appSettings).then(() => {
      this.presentToast();
    });
  }

}
