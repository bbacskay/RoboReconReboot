import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfigService } from '../../../services/config.service';
import { MatchDataService } from '../../../services/match-data.service';
import { EventsService } from '../../../services/events.service';
import { AlertService } from '../../../services/alert.service';
import { MatchListItem } from '../../../interfaces/match';

@Component({
  selector: 'app-matchedit',
  templateUrl: './matchedit.page.html',
  styleUrls: ['./matchedit.page.scss'],
})
export class MatcheditPage implements OnInit {

  public eventName: string = '';

  public matchId: string = '';
  public matchData: MatchListItem = <MatchListItem>{ 
    matchId: 0,
    matchNo: 0,
    blue1TeamNumber: 0,
    blue2TeamNumber: 0,
    blue3TeamNumber: 0,
    red1TeamNumber: 0,
    red2TeamNumber: 0,
    red3TeamNumber: 0
  };
  
  constructor(private config: ConfigService,
              private events: EventsService,
              private matchlist: MatchDataService, 
              private route: ActivatedRoute,
              private router: Router,
              private alertService: AlertService
              ) { 

  }
  
  ngOnInit() {
    var currentEvent: any;

    this.matchId = this.route.snapshot.paramMap.get('matchid');
    //console.log('Match ID: ' + this.matchId);

    //console.log('onInit: ' + this.matchlist.matches.value);
    //console.log('MatchID as number: ' + Number(this.matchId));

    //console.log('Find: '); 
    //console.log(this.matchlist.matches.value.find(match => match.matchId == Number(this.matchId)) );

    this.matchData = this.matchlist.matches.value.find(match => match.matchId == Number(this.matchId));

    //console.log("matchData:");
    //console.log(this.matchData);

    currentEvent = this.events.events.value.find((event) => event.id == this.config.config.selectedEvent);

    if (currentEvent) {
      this.eventName = currentEvent.name;
    }

  }

  ionViewWillEnter() {
    //this.matchData = this.matchlist.matches.value.find(match => match.matchNo === Number(this.matchNo));
  }


  async save() {
    let result = await this.matchlist.updateMatch(this.config.config.selectedEvent, 'qm', this.matchData);
    this.alertService.presentToast('Match data has been updated.');

    this.router.navigate(['/private/matchlist']);
  }

}

