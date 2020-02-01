import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Event } from '../interfaces/event';
import { SettingsService } from './settings.service';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  public eventsList: Event[] = [];

  public events: BehaviorSubject<Event[]> = new BehaviorSubject([]);

  constructor(private appSettings: SettingsService, private http: HttpClient) { 

  }

  /**
   * Load list of events
   */
  load() {
    var tmpEvents: Event[] = [];

    this.http.get<Event[]>(this.appSettings.settings.value.apiPath + '/event/read.php').subscribe(
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
  add( event: Event) :Promise<boolean> {
    console.log('Add event: ' + event.name + ' (' + event.baEventKey + ')');
    return new Promise((resolve) => {
      this.http.post(this.appSettings.settings.value.apiPath + '/event/create.php', {
        baEventKey: event.baEventKey,
        name: event.name,
        location: event.location,
        startDate: event.startDate,
        endDate: event.endDate
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
      this.load();
    });
  }
}
