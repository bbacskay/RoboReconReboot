import { Component, OnInit } from '@angular/core';
import { Season } from '../../../interfaces/season';
import { SeasonsService } from '../../../services/seasons.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertService } from '../../../services/alert.service';

@Component({
  selector: 'app-seasonedit',
  templateUrl: './seasonedit.page.html',
  styleUrls: ['./seasonedit.page.scss'],
})
export class SeasoneditPage implements OnInit {

  public seasonId: number = 0
  public seasonData: Season = <Season>{
    year: 0,
    gameTitle: ''
  }


  constructor(private seasons: SeasonsService,
              private route: ActivatedRoute,
              private router: Router,
              private alertService: AlertService) { }

  ngOnInit() {
    this.seasonId = Number (this.route.snapshot.paramMap.get('seasonyear'));

    this.seasonData = this.seasons.seasons.value.find(season => season.year == this.seasonId);
    
    console.log('seasonid = ' + this.seasonId);
    console.log(this.seasonData);
  }

  public update() {
    this.seasons.update(this.seasonData, this.seasonId);
    this.router.navigate(['/private/seasonlist']);
  };

}
