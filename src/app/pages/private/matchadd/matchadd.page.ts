import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatchListItem } from '../../../interfaces/match';
import { ConfigService } from '../../../services/config.service';
import { EventsService } from '../../../services/events.service';
import { MatchDataService } from '../../../services/match-data.service';

@Component({
  selector: 'app-matchadd',
  templateUrl: './matchadd.page.html',
  styleUrls: ['./matchadd.page.scss'],
})
export class MatchaddPage implements OnInit {

  public eventName: string = '';

  public matchNo: string = '';
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
    private router: Router) { }

  ngOnInit() {
    var currentEvent: any;

    this.matchNo = this.route.snapshot.paramMap.get('matchno');
    console.log('Match no: ' + this.matchNo);

    this.matchData.matchNo = Number(this.matchNo);

    currentEvent = this.events.events.value.find((event) => event.id == this.config.config.selectedEvent);

    if (currentEvent) {
      this.eventName = currentEvent.name;
    }
  }

  add() {
    this.matchlist.addMatch(this.config.config.selectedEvent, 'qm', this.matchData);
    this.router.navigate(['/private/matchlist']);
  }

}
