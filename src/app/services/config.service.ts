import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Config, ConfigListItem } from '../interfaces/config';
import { SettingsService } from './settings.service';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  public config: Config = {
    ownTeam: 3489,
    selectedEvent: 1
  }

  constructor(private appSettings: SettingsService, private http: HttpClient) {
  }

  load(): Promise<boolean> {
    return new Promise((resolve) => {
      this.http.get<ConfigListItem[]>(this.appSettings.settings.value.apiPath + '/configuration/load.php').subscribe(
        (data) => {
          console.log(data);
          //this.matches.next(data);
          let ownTeam = data.find(option => option.name === 'ownTeam');

          if (ownTeam!=null) {
            this.config.ownTeam=ownTeam.value;
          } else {
            this.config.ownTeam=3489;
          }

          let selectedEvent = data.find(option => option.name === 'selectedEvent');

          if (selectedEvent!=null) {
            this.config.selectedEvent=Number(selectedEvent.value);
          } else {
            this.config.selectedEvent=1;
          }

          console.log(this.config);

        },
        (err) => {
          console.log(err);
          //this.matches.next(<MatchListItem[]>[]);
        },
        () => {
          console.log("Configuration list completed");
          resolve(true);
        }
      );
    })
  }

  save(): Promise<boolean> {
    return new Promise((resolve) => {
      let configArr: ConfigListItem[] = [
        {
          name: 'ownTeam',
          value: this.config.ownTeam
        },
        {
          name: 'selectedEvent',
          value: this.config.selectedEvent
        }
      ];

      this.http.post(this.appSettings.settings.value.apiPath + '/configuration/save.php', {
        configArr
      }
      ).subscribe((result) => {
        console.log(result);
        this.load();
      });

      resolve(true);
    });
  }

}
