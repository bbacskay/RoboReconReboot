import { Component, OnInit } from '@angular/core';
import { Season } from '../../../interfaces/season';
import { ConfigService } from '../../../services/config.service';
import { SeasonsService } from '../../../services/seasons.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-seasonlist',
  templateUrl: './seasonlist.page.html',
  styleUrls: ['./seasonlist.page.scss'],
})
export class SeasonlistPage implements OnInit {

  public seasonList: Season[];

  constructor(private configService: ConfigService, public seasonsService: SeasonsService, private alertController: AlertController) { 
    this.seasonsService.seasons.subscribe((data) => {
      this.seasonList = data;

      console.log("Season list updated.")

    })
  }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.seasonsService.load();
  }

  private delete(seasonYear: number) {
    this.seasonsService.delete(seasonYear);
  }

  async presentAlertConfirmDelete(season: Season) {
    const alert = await this.alertController.create({
      header: 'Confirm delete!',
      message: 'Delete <strong>' + season.gameTitle + '</strong> event?',
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
            this.delete(season.year);
          }
        }
      ]
    });

    await alert.present();
  }


}
