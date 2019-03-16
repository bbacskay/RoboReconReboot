import { Component, OnInit } from '@angular/core';
import { MonitorMatchData, MonitorQuestionItem } from '../../../interfaces/match';
import { MatchscoutingDataService } from '../../../services/matchscouting-data.service';

@Component({
  selector: 'app-scoutmonitor',
  templateUrl: './scoutmonitor.page.html',
  styleUrls: ['./scoutmonitor.page.scss'],
})
export class ScoutmonitorPage implements OnInit {

  public matches: MonitorMatchData[] = [];

  constructor(private scoutingData: MatchscoutingDataService) { 
    
    this.scoutingData.monitorData.subscribe((data) => {
      this.matches = data;
      this.matches.sort((a,b) => b.match_no - a.match_no);
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
