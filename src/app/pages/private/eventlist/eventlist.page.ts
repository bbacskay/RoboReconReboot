import { Component, OnInit } from '@angular/core';
import { EventsService } from '../../../services/events.service';
import { Event } from '../../../interfaces/event';
import { AlertController } from '@ionic/angular';
import { ConfigService } from '../../../services/config.service';

@Component({
  selector: 'app-eventlist',
  templateUrl: './eventlist.page.html',
  styleUrls: ['./eventlist.page.scss'],
})
export class EventlistPage implements OnInit {

  public eventList: Event[]

  constructor(private configService: ConfigService, public eventService: EventsService, private alertController: AlertController) { 
    this.eventService.events.subscribe((data) => {
      this.eventList = data;

      console.log("Event list updated.")

    })

  }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.eventService.load(this.configService.config.selectedSeason);
  }

  private delete(eventId: number) {
    this.eventService.delete(eventId);
  }

  async presentAlertConfirmDelete(event: Event) {
    const alert = await this.alertController.create({
      header: 'Confirm delete!',
      message: 'Delete <strong>' + event.name + '</strong> event?',
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
            this.delete(event.id);
          }
        }
      ]
    });

    await alert.present();
  }

}
