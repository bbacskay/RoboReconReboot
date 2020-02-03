import { Injectable } from '@angular/core';
import { Season } from '../interfaces/season';
import { SettingsService } from './settings.service';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SeasonsService {

  public seasonsList: Season[] = [];
  public seasons: BehaviorSubject<Season[]> = new BehaviorSubject([]);

  constructor(private appSettings: SettingsService, private http: HttpClient) { }


  /**
   * Load list of seasons
   */
  load() : Promise<boolean> {
    var tmpSeasons: Season[] = [];

    return new Promise((resolve) => {
      this.http.get<Season[]>(this.appSettings.settings.value.apiPath + '/season/load.php').subscribe(
        (data) => {
          console.log(data);
          this.seasons.next(data);
          this.seasonsList = data;
          resolve(true);
        },
        (err) => {
          console.log(err);
          resolve(false);
        },
        () => {
          console.log("Get season list completed");
        }
      );
      });
  }

/**
   * Add new season
   */
  add( season: Season) :Promise<boolean> {
    console.log('Add season: ' + season.gameTitle + ' (' + season.year + ')');
    return new Promise((resolve) => {
      this.http.post(this.appSettings.settings.value.apiPath + '/season/create.php', {
        year: season.year,
        gameTitle: season.gameTitle
      }
      ).subscribe((result) => {
        console.log(result);
        this.load();
        resolve(true);
      },
      (err) => {
        console.log(err);
        resolve(false);
      });
    });
  }

  /**
   * Update season
   * @param season 
   */
  public update(season: Season) {
    console.log('Update-season');
    console.log(season);
    this.http.post(this.appSettings.settings.value.apiPath + '/season/update.php', {
      year: season.year,
      gameTitle: season.gameTitle
    }
    ).subscribe((result) => {
      console.log(result);
      this.load();
    });
  }





  /**
   * Delete season
   * @param {number} year
   */
  delete( year: number ) {
    console.log("Delete season " + year + " requested.");
  }

}
