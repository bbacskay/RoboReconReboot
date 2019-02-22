import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ScoutDataService } from '../../../services/scout-data.service';
import { Scout } from '../../../interfaces/scout';

@Component({
  selector: 'app-scoutedit',
  templateUrl: './scoutedit.page.html',
  styleUrls: ['./scoutedit.page.scss'],
})
export class ScouteditPage implements OnInit {

  public scoutId: number;
  public scout: Scout = <Scout>{};

  constructor(private scoutService: ScoutDataService,
              private router: Router,
              private route: ActivatedRoute
  ) {

  }

  ngOnInit() {
    this.scoutId = Number(this.route.snapshot.paramMap.get('scoutid'));

    this.scout = this.scoutService.scouts.value.find(scout => scout.scout_id == this.scoutId);

  }


  private save() {
    this.scoutService.update(this.scout);
    this.router.navigate(['/private/scoutmanager']);
  };
}
