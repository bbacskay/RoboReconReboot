import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { SettingsService } from './settings.service';
import { ScoutingData, PrevNoteItem, MonitorMatchData } from '../interfaces/match';
import { ConfigService } from './config.service';

const tmpMonitorData: MonitorMatchData[] = [
  {
    match_no: 1,
    ba_match_key: 'ba_match_key',
    blue_1 : {
      scouting_data_id: 1,
      teamNo: 1111,
      scout: 'Balu',
      questions: [
        {
          id: 'SQ1',
          value: '',
          ok: false
        },
        {
          id: 'SQ2',
          value: '',
          ok: true
        },
        {
          id: 'SQ3',
          value: '',
          ok: true
        }
      ],
      note: 'Note for match 1 blue_1'
    },
    blue_2 : {
      scouting_data_id: 1,
      teamNo: 1112,
      scout: 'Balu',
      questions: [
        {
          id: 'SQ1',
          value: '',
          ok: true
        },
        {
          id: 'SQ2',
          value: '',
          ok: false
        },{
          id: 'SQ3',
          value: '',
          ok: true
        }
      ],
      note: 'Note for match 1 blue_2'
    },
    blue_3 : {
      scouting_data_id: 1,
      teamNo: 1113,
      scout: 'Balu',
      questions: [
        {
          id: 'SQ1',
          value: '',
          ok: true
        },
        {
          id: 'SQ2',
          value: '',
          ok: true
        },
        {
          id: 'SQ3',
          value: '',
          ok: false
        }
      ],
      note: 'Note for match 1 blue_3'
    },
    red_1 : {
      scouting_data_id: 1,
      teamNo: 2111,
      scout: 'Balu',
      questions: [
        {
          id: 'SQ1',
          value: '',
          ok: true
        },
        {
          id: 'SQ2',
          value: '',
          ok: true
        },
        {
          id: 'SQ3',
          value: '',
          ok: false
        }
      ],
      note: 'Note for match 1 red_1'
    },
    red_2 : {
      scouting_data_id: 1,
      teamNo: 2112,
      scout: 'Balu',
      questions: [
        {
          id: 'SQ1',
          value: '',
          ok: true
        },
        {
          id: 'SQ2',
          value: '',
          ok: false
        },
        {
          id: 'SQ3',
          value: '',
          ok: true
        }
      ],
      note: 'Note for match 1 red_2'
    },
    red_3 : {
      scouting_data_id: 1,
      teamNo: 2113,
      scout: 'Balu',
      questions: [
        {
          id: 'SQ1',
          value: '',
          ok: true
        },
        {
          id: 'SQ2',
          value: '',
          ok: true
        },
        {
          id: 'SQ3',
          value: '',
          ok: false
        }
      ],
      note: 'Note for match 1 red_3'
    }
  },
  {
    match_no: 2,
    ba_match_key: 'ba_match_key',
    blue_1 : {
      scouting_data_id: 1,
      teamNo: 1111,
      scout: 'Balu',
      questions: [
        {
          id: 'SQ1',
          value: '',
          ok: false
        },
        {
          id: 'SQ2',
          value: '',
          ok: true
        },
        {
          id: 'SQ3',
          value: '',
          ok: true
        }
      ],
      note: 'Note for match 2 blue_1'
    },
    blue_2 : {
      scouting_data_id: 1,
      teamNo: 1112,
      scout: 'Balu',
      questions: [
        {
          id: 'SQ1',
          value: '',
          ok: true
        },
        {
          id: 'SQ2',
          value: '',
          ok: false
        },
        {
          id: 'SQ3',
          value: '',
          ok: true
        }
      ],
      note: 'Note for match 2 blue_2'
    },
    blue_3 : {
      scouting_data_id: 1,
      teamNo: 1113,
      scout: 'Balu',
      questions: [
        {
          id: 'SQ1',
          value: '',
          ok: true
        },
        {
          id: 'SQ2',
          value: '',
          ok: true
        },
        {
          id: 'SQ3',
          value: '',
          ok: false
        }
      ],
      note: 'Note for match 2 blue_3'
    },
    red_1 : {
      scouting_data_id: 1,
      teamNo: 2111,
      scout: 'Balu',
      questions: [
        {
          id: 'SQ1',
          value: '',
          ok: false
        },
        {
          id: 'SQ2',
          value: '',
          ok: true
        },
        {
          id: 'SQ3',
          value: '',
          ok: true
        }
      ],
      note: 'Note for match 2 red_1'
    },
    red_2 : {
      scouting_data_id: 1,
      teamNo: 2112,
      scout: 'Balu',
      questions: [
        {
          id: 'SQ1',
          value: '',
          ok: true
        },
        {
          id: 'SQ2',
          value: '',
          ok: false
        },
        {
          id: 'SQ3',
          value: '',
          ok: true
        }
      ],
      note: 'Note for match 2 red_2'
    },
    red_3 : {
      scouting_data_id: 1,
      teamNo: 2113,
      scout: 'Balu',
      questions: [
        {
          id: 'SQ1',
          value: '',
          ok: true
        },
        {
          id: 'SQ2',
          value: '',
          ok: true
        },
        {
          id: 'SQ3',
          value: '',
          ok: false
        }
      ],
      note: 'Note for match 2 red_3'
    }
  }
];


@Injectable({
  providedIn: 'root'
})
export class MatchscoutingDataService {


  public prevComments: BehaviorSubject<PrevNoteItem[]> = new BehaviorSubject<PrevNoteItem[]>([]);
  public monitorData: BehaviorSubject<MonitorMatchData[]> = new BehaviorSubject<MonitorMatchData[]>(tmpMonitorData);

  constructor(
    private appSettings: SettingsService,
    private http: HttpClient,
    private configService: ConfigService
    ) {

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
          //console.log('matchdata:');
          //console.log(data);
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
        scoutid: data.scout_id,
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

  /**
   * Load match monitoring info
   */
  public monitor() {

    const params: HttpParams = new HttpParams()
                                    .set('eventid', this.configService.config.selectedEvent.toString())
                                    .set('complevel', 'qm')

    this.http.get<MonitorMatchData[]>(this.appSettings.settings.value.apiPath + '/matchdata/monitor.php', {params}).subscribe(
      (data) => {
        console.log(data);
        this.monitorData.next(data);
      },
      (err) => {
        console.log(err);
        this.monitorData.next(<MonitorMatchData[]>[]);
      },
      () => {
        console.log("Get list of monitoring data completed");
      }
    );
  }


}
