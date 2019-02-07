import { Injectable } from '@angular/core';
import { MatchListItem } from '../interfaces/match';
import { HttpClient } from '@angular/common/http';
import { SettingsService } from './settings.service';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MatchDataService {

  matches = new BehaviorSubject([]);

  constructor(private appSettings: SettingsService, private http: HttpClient) { }

  /**
   * Load match list
   */
  public load() {

    var tmpMatches: MatchListItem[] = [];

    this.http.get<MatchListItem[]>(this.appSettings.settings.value.apiPath + '/match/read.php').subscribe(
      (data) => {
        console.log(data);
        this.matches.next(data);
      },
      (err) => {
        console.log(err);
      },
      () => {
        console.log("Get match list completed");
      }
    );
  }


  /**
   * Add a new match
   * 
   * @param match Team object to add
   */
  public addMatch(eventid: number, compLevel: string, match: MatchListItem): void {
    console.log('To event: ' + eventid + ' (' + compLevel + ') ' + ' Add match: ' + match);

    this.http.post(this.appSettings.settings.value.apiPath + '/match/create.php', {
      eventid: eventid,
      compLevel: compLevel,
      matchno: match.matchNo,
      blue_1: match.blue1TeamNumber,
      blue_2: match.blue2TeamNumber,
      blue_3: match.blue3TeamNumber,
      red_1: match.red1TeamNumber,
      red_2: match.red2TeamNumber,
      red_3: match.red3TeamNumber
    }
    ).subscribe((result) => {
      console.log(result);
      this.load();
    });

  }


}
