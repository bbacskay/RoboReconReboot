import { Component, OnInit } from '@angular/core';
import { MonitorMatchData, MonitorQuestionItem } from '../../../interfaces/match';
import { MatchscoutingDataService } from '../../../services/matchscouting-data.service';
import { EventsService } from '../../../services/events.service';
import { ConfigService } from '../../../services/config.service';

@Component({
  selector: 'app-scoutmonitor',
  templateUrl: './scoutmonitor.page.html',
  styleUrls: ['./scoutmonitor.page.scss'],
})
export class ScoutmonitorPage implements OnInit {

  public matches: MonitorMatchData[] = [];
  public event: string;

  constructor(private scoutingData: MatchscoutingDataService,
              private config: ConfigService,
              private eventlist: EventsService
              ) { 
    
    this.scoutingData.monitorData.subscribe((data) => {
      this.matches = data;
      this.matches.sort((a,b) => b.match_no - a.match_no);
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
  }

  public getClass(value: boolean): string {
    if (value) {
      return "qOk";
    } else {
      return "qNok";
    }
  }


  public refresh() {
    this.scoutingData.monitor();
  }

}
