import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Event } from '../interfaces/event';
import { SettingsService } from './settings.service';
import { BehaviorSubject } from 'rxjs';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  public eventsList: Event[] = [];

  public events: BehaviorSubject<Event[]> = new BehaviorSubject([]);

  constructor(private appSettings: SettingsService, private configService: ConfigService, private http: HttpClient) { 

  }

  /**
   * Load list of events
   */
  load( year : number ) {
    var tmpEvents: Event[] = [];

    const params: HttpParams = new HttpParams()
      .set('year', year.toString());

    this.http.get<Event[]>(this.appSettings.settings.value.apiPath + '/event/read.php', {params}).subscribe(
      (data) => {
        console.log(data);
        this.events.next(data);
        this.eventsList = data;
      },
      (err) => {
        console.log(err);
      },
      () => {
        console.log("Get event list completed");
      }
    );
  }

  /**
   * Add new event
   */
  add( event: Event ) :Promise<boolean> {
    console.log('Add event: ' + event.name + ' (' + event.baEventKey + ')');
    return new Promise((resolve) => {
      this.http.post(this.appSettings.settings.value.apiPath + '/event/create.php', {
        year: this.configService.config.selectedSeason,
        baEventKey: event.baEventKey,
        name: event.name,
        location: event.location,
        startDate: event.startDate.toString().split('T')[0],
        endDate: event.endDate.toString().split('T')[0]
      }
      ).subscribe((result) => {
        console.log(result);
        this.load(this.configService.config.selectedSeason);
        resolve(true);
      },
      (err) => {
        console.log(err);
        resolve(false);
      });
    });
  }

  /**
   * Delete event
   * @param {number} id
   */
  delete( id: number) {
    console.log("Delete event " + id + " requested.");
  }

  public update(event: Event) {
    console.log('Update-event');
    console.log(event);
    this.http.post(this.appSettings.settings.value.apiPath + '/event/update.php', {
      id: event.id,
      baEventKey: event.baEventKey,
      name: event.name,
      location: event.location,
      startDate: event.startDate,
      endDate: event.endDate
    }
    ).subscribe((result) => {
      console.log(result);
      this.load(this.configService.config.selectedSeason);
    });
  }
}
