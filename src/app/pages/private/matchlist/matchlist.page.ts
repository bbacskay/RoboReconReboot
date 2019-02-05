import { Component, OnInit } from '@angular/core';
import { MatchListItem } from '../../../interfaces/match';

@Component({
  selector: 'app-matchlist',
  templateUrl: './matchlist.page.html',
  styleUrls: ['./matchlist.page.scss'],
})
export class MatchlistPage implements OnInit {

  private matches: MatchListItem[] = [];

  constructor() { 
    this.matches.push({
      matchNo: 1,
      blue1TeamNumber: 1111,
      blue2TeamNumber: 1112,
      blue3TeamNumber: 1113,
      red1TeamNumber: 2111,
      red2TeamNumber: 2112,
      red3TeamNumber: 2113
    });

    this.matches.push({
      matchNo: 2,
      blue1TeamNumber: 1211,
      blue2TeamNumber: 1212,
      blue3TeamNumber: 1213,
      red1TeamNumber: 2211,
      red2TeamNumber: 2212,
      red3TeamNumber: 2213
    });
  }

  ngOnInit() {
  }

}
