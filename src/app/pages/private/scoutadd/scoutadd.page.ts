import { Component, OnInit } from '@angular/core';
import { Scout } from '../../../interfaces/scout';
import { ScoutDataService } from '../../../services/scout-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-scoutadd',
  templateUrl: './scoutadd.page.html',
  styleUrls: ['./scoutadd.page.scss'],
})
export class ScoutaddPage implements OnInit {

  public newScout: Scout = <Scout>{
    loginname: '',
    firstname: '',
    lastname: '',
    mentor: false,
    password: ''
  };

  constructor(private scoutService: ScoutDataService, private router: Router) { }

  ngOnInit() {
  }

  public add() {
    this.scoutService.add(this.newScout);
    this.router.navigate(['/private/scoutmanager']);
  }

}
