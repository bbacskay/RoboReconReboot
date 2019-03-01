import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { SettingsService } from './settings.service';
import { ScoutingData, PrevNoteItem } from '../interfaces/match';

@Injectable({
  providedIn: 'root'
})
export class MatchscoutingDataService {

  public prevComments: BehaviorSubject<PrevNoteItem[]> = new BehaviorSubject<PrevNoteItem[]>([]);

  constructor(private appSettings: SettingsService, private http: HttpClient) {

  }

  /**
   * Read scouting data
   * @param matchno match number
   * @param teamno  team number
   * @param scoutid scout id
   */
  public read(matchno: number, teamno: number, scoutid: number): Promise<ScoutingData> {
    return new Promise((resolve) => {
      let params = new HttpParams();
      params = params.append('matchno', matchno.toString());
      params = params.append('teamno', teamno.toString());
      params = params.append('scoutid', scoutid.toString());

      this.http.get<ScoutingData>(this.appSettings.settings.value.apiPath + '/matchdata/read.php', { params }).subscribe(
        (data) => {
          console.log('matchdata:');
          console.log(data);
          //this.scouts.next(data);
          resolve(data);
        },
        (err) => {
          console.log(err);
          resolve(<ScoutingData>{});
        },
        () => {
          console.log("Get scouting data for match " + matchno + ", team " + teamno + " list completed");
        }
      );
    });
  }

  public save(data: ScoutingData): Promise<boolean> {
    return new Promise((resolve) => {
      this.http.post(this.appSettings.settings.value.apiPath + '/matchdata/update.php', {
        id: data.id,
        data: data.data,
        note: data.note
      }
      ).subscribe((result) => {
        console.log(result);
        this.load();
      });

      resolve(true);
    });

  }

  /**
   * Load all the matches
   */
  public load() {

  }

  /**
   * Load previous comments
   */
  public loadPreviousNotes(teamNo: number) {

    var tmpNotes: PrevNoteItem[] = [];

    const params: HttpParams = new HttpParams()
                                    .set('teamno', teamNo.toString());

    this.http.get<PrevNoteItem[]>(this.appSettings.settings.value.apiPath + '/matchdata/comments.php', {params}).subscribe(
      (data) => {
        console.log(data);
        this.prevComments.next(data);
      },
      (err) => {
        console.log(err);
        this.prevComments.next(<PrevNoteItem[]>[]);
      },
      () => {
        console.log("Get list of previous notes completed");
      }
    );
  }
}
