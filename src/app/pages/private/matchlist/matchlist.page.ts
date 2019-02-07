import { Component, OnInit } from '@angular/core';
import { MatchListItem } from '../../../interfaces/match';
import { ConfigService } from '../../../services/config.service';
import { MatchDataService } from '../../../services/match-data.service';

@Component({
  selector: 'app-matchlist',
  templateUrl: './matchlist.page.html',
  styleUrls: ['./matchlist.page.scss'],
})
export class MatchlistPage implements OnInit {

  private matches: MatchListItem[] = [];
  private event: string;

  constructor(private config: ConfigService, private matchlist: MatchDataService) { 
    this.matchlist.matches.subscribe(data => {
      this.matches = data;
    });
    

  }

  ngOnInit() {
    //event = this.config.config.selectedEvent
  }

  ionViewWillEnter() {
    this.matchlist.load();
  }

}
