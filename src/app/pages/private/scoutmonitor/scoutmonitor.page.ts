import { Component, OnInit } from '@angular/core';
import { MonitorMatchData, MonitorQuestionItem } from '../../../interfaces/match';
import { MatchscoutingDataService } from '../../../services/matchscouting-data.service';
import { EventsService } from '../../../services/events.service';
import { ConfigService } from '../../../services/config.service';
import { SettingsService } from '../../../services/settings.service';

@Component({
  selector: 'app-scoutmonitor',
  templateUrl: './scoutmonitor.page.html',
  styleUrls: ['./scoutmonitor.page.scss'],
})
export class ScoutmonitorPage implements OnInit {

  public matches: MonitorMatchData[] = [];
  public event: string;
  public loading: boolean = false;
  public autorefresh: boolean = false;
  private intervalId: any;

  constructor(private scoutingData: MatchscoutingDataService,
              private config: ConfigService,
              private eventlist: EventsService,
              private settingsService: SettingsService
              ) { 
    
    this.scoutingData.monitorData.subscribe((data) => {
      this.matches = data;
      this.matches.sort((a,b) => b.match_no - a.match_no);

      this.loading = false;
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

  ngOnDestroy() {
    this.clearAutoRefresh();
  }

  public getClass(value: boolean): string {
    if (value) {
      return "qOk";
    } else {
      return "qNok";
    }
  }


  public refresh() {
    this.loading = true;
    this.scoutingData.monitor();
  }

  public callbackRefresh(data: ScoutmonitorPage) {
    data.refresh();
  }

  public setAutoRefresh() {
    console.log("setAutoRefresh was called");
    this.intervalId=setInterval(this.callbackRefresh, this.settingsService.settings.value.monitorRefreshTime * 1000, this);
  }

  public clearAutoRefresh(){
    console.log("clearAutoRefresh was called");
    clearInterval(this.intervalId);
  }

  public clickAutoRefresh() {
    console.log("clickAutoRefresh was called");
    console.log("autorefresh=" + this.autorefresh);
    if (this.autorefresh==false){
      this.setAutoRefresh();
    }else {
      this.clearAutoRefresh();
    }
  }

}
