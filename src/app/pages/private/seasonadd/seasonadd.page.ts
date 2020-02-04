import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertService } from '../../../services/alert.service';
import { Season } from '../../../interfaces/season';
import { SeasonsService } from '../../../services/seasons.service';


@Component({
  selector: 'app-seasonadd',
  templateUrl: './seasonadd.page.html',
  styleUrls: ['./seasonadd.page.scss'],
})
export class SeasonaddPage implements OnInit {

  public newSeason: Season = <Season>{
    gameTitle: '',
    year: 0
  }

  constructor(private seasonsService: SeasonsService, private router: Router,
    private alertService: AlertService) { }

  ngOnInit() {
  }

  public add() {
    this.seasonsService.add(this.newSeason).then((response) => {
      this.router.navigate(['/private/seasonlist']);
      console.log (this.newSeason);
      if (response) {
        this.alertService.presentToast("Season sucessfully added");
      } else {
        this.alertService.presentToast("Error: Season not added");
      }; 
    });
  }
}
