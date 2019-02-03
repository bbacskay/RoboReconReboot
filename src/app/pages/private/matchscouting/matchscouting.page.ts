import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-matchscouting',
  templateUrl: './matchscouting.page.html',
  styleUrls: ['./matchscouting.page.scss'],
})
export class MatchscoutingPage implements OnInit {
  private teleopHatches: number;
  private teleopCargo: number;


  constructor() { }

  ngOnInit() {
    this.teleopHatches=0;
    this.teleopCargo=0;
  }

  public hatchPlus() {
    this.teleopHatches++;
  }

  public hatchMinus() {
    if(this.teleopHatches>0){
      this.teleopHatches--;
    }
  }

  public cargoPlus() {
    this.teleopCargo++;
  }

  public cargoMinus() {
    this.teleopCargo--;
  }
}
