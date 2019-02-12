import { Component, OnInit } from '@angular/core';
import { MatchListItem } from '../../../interfaces/match';
import { ConfigService } from '../../../services/config.service';
import { MatchDataService } from '../../../services/match-data.service';
import { EventsService } from '../../../services/events.service';

@Component({
  selector: 'app-matchlist',
  templateUrl: './matchlist.page.html',
  styleUrls: ['./matchlist.page.scss'],
})
export class MatchlistPage implements OnInit {

  private matches: MatchListItem[] = [];
  public event: string;

  constructor(private config: ConfigService, private matchlist: MatchDataService, private eventlist: EventsService) {
    this.matchlist.matches.subscribe(data => {
      this.matches = data;
    });

    this.eventlist.events.subscribe((data) => {
      var i = 0;
      var eventFound = false;
      this.event = '';

      if (data.length > 0) {
        do {
          if (data[i].id == this.config.config.selectedEvent) {
            this.event = data[i].name;
            eventFound = true;
          } else {
            i++;
          }

        } while ((i < data.length) && (!eventFound));

      }
    });


  }

  ngOnInit() {
    //event = this.config.config.selectedEvent
  }

  ionViewWillEnter() {
    this.matchlist.load(this.config.config.selectedEvent,'qm');
    this.eventlist.load();
  }

}
