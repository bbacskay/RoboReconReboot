import { Injectable } from '@angular/core';
import { MatchListItem } from '../interfaces/match';
import { HttpClient, HttpParams } from '@angular/common/http';
import { SettingsService } from './settings.service';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MatchDataService {

  public matches: BehaviorSubject<MatchListItem[]> = new BehaviorSubject<MatchListItem[]>([]);

  constructor(private appSettings: SettingsService, private http: HttpClient) { }


  /**
   * Load match list
   */
  public load(eventid: number, compLevel: string) {

    var tmpMatches: MatchListItem[] = [];

    const params: HttpParams = new HttpParams()
      .set('eventid', eventid.toString())
      .set('complevel', compLevel);

    this.http.get<MatchListItem[]>(this.appSettings.settings.value.apiPath + '/match/load.php', { params }).subscribe(
      (data) => {
        console.log(data);
        this.matches.next(data);
      },
      (err) => {
        console.log(err);
        this.matches.next(<MatchListItem[]>[]);
      },
      () => {
        console.log("Get match list completed");
      }
    );
  }


  /**
   * Add a new match
   * 
   * @param match Match object to add
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
      this.load(eventid, compLevel);
    });

  }

  public updateMatch(eventid: number, compLevel: string, data: MatchListItem): Promise<boolean> {
    console.log('Update match data: ' + data.matchId);
    return new Promise((resolve) => {
      this.http.post(this.appSettings.settings.value.apiPath + '/match/update.php', {
        matchid: data.matchId,
        blue_1: data.blue1TeamNumber,
        blue_2: data.blue2TeamNumber,
        blue_3: data.blue3TeamNumber,
        red_1: data.red1TeamNumber,
        red_2: data.red2TeamNumber,
        red_3: data.red3TeamNumber
      }
      ).subscribe(
        (result) => {
          console.log(result);
          this.load(eventid, compLevel);
          resolve(true);
        },
        (err) => {
          console.log(err);
          resolve(false);
        }
      );
    });

  }

  public deleteMatch(eventid: number, compLevel: string, matchId: number) {
    this.http.post(this.appSettings.settings.value.apiPath + '/match/delete.php', {
      match_id: matchId
    }
    ).subscribe((result) => {
      console.log(result);
      this.load(eventid, compLevel);
    });
  }

}
