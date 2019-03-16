import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../../../services/config.service';
import { EventsService } from '../../../services/events.service';
import { AlertService } from '../../../services/alert.service';

@Component({
  selector: 'app-configuration',
  templateUrl: './configuration.page.html',
  styleUrls: ['./configuration.page.scss'],
})
export class ConfigurationPage implements OnInit {

  constructor(
    public config: ConfigService,
    public events: EventsService,
    private alertService: AlertService
  ) { }

  ngOnInit() {
  }


  save() {
    console.log(this.config.config);
    this.config.save().then(() => {
      this.alertService.presentToast('Your configuration has been saved.')
    }

    );

  }

}
