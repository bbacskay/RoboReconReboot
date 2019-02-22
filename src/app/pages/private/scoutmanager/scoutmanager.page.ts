import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Scout } from '../../../interfaces/scout';
import { ScoutDataService } from '../../../services/scout-data.service';

@Component({
  selector: 'app-scoutmanager',
  templateUrl: './scoutmanager.page.html',
  styleUrls: ['./scoutmanager.page.scss'],
})
export class ScoutmanagerPage implements OnInit {

  public scouts: Scout[] = [];
  

  constructor(private alertController: AlertController, private scoutData: ScoutDataService) { 
    this.scoutData.scouts.subscribe((data) => {
      this.scouts = data;
    });
  }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.scoutData.load();
  }


  private delete(scoutId: number) {
    this.scoutData.delete(scoutId);
  }

  async presentAlertConfirmDelete(scout: Scout) {
    const alert = await this.alertController.create({
      header: 'Confirm delete!',
      message: 'Delete <strong>' + scout.loginname + '</strong> scout?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            //console.log('Delete Cancelled');
          }
        }, {
          text: 'Delete',
          cssClass: 'primary',
          handler: () => {
            //console.log('Confirm Okay');
            this.delete(scout.scout_id);
          }
        }
      ]
    });

    await alert.present();
  }
}
