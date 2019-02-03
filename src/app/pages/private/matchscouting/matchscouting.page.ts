import { Component, OnInit } from '@angular/core';

const TELEOP_HATCHES = 1;
const TELEOP_CARGO   = 2;

@Component({
  selector: 'app-matchscouting',
  templateUrl: './matchscouting.page.html',
  styleUrls: ['./matchscouting.page.scss'],
})
export class MatchscoutingPage implements OnInit {
  public valueArray: number[] = new Array(TELEOP_CARGO);


  constructor() { }

  ngOnInit() {
    this.valueArray[TELEOP_HATCHES]=0;
    this.valueArray[TELEOP_CARGO]=0;
  }


  public valueMinus(numValue: number) {
    if (numValue > 0){
      this.valueArray[numValue]--;
    }
  }

  public valuePlus(numValue: number) {
    this.valueArray[numValue]++;
  }

}
