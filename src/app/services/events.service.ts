import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Event } from '../interfaces/event';
import { SettingsService } from './settings.service';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  public eventsList: Event[] = [{
    id: 1,
    baEventKey: '2019scmb',
    name: 'Palmetto Regional',
    location: 'Myrtle Beach',
    startDate: '02/27/2019',
    endDate: '03/02/2019'
  },
  {
    id: 2,
    baEventKey: '2019tnkn',
    name: 'Smoky Mountains Regional',
    location: 'Knoxville',
    startDate: '03/27/2019',
    endDate: '03/30/2019'
  }
  ];

  constructor(private settings: SettingsService, private http: HttpClient) { 

  }

  /**
   * Load list of events
   */
  load() {
    var tmpEvents: Event[] = [];

    this.http.get<Event[]>(this.settings.settings.value.apiPath + '/event/read.php').subscribe(
      (data) => {
        console.log(data);
        //this.events.next(data);
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
  add( event: Event) {

  }

  /**
   * Delete event
   * @param {number} id
   */
  delete( id: number) {

  }

  update( event: Event ) {

  }
}
