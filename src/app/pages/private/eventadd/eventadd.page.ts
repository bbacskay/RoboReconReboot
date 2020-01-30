import { Component, OnInit } from '@angular/core';
import { Event } from '../../../interfaces/event';
import { EventsService } from '../../../services/events.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-eventadd',
  templateUrl: './eventadd.page.html',
  styleUrls: ['./eventadd.page.scss'],
})
export class EventaddPage implements OnInit {

  public newEvent: Event = <Event>{
    id: 0,
    baEventKey: '',
    name: '',
    location: '',
    startDate: '',
    endDate: ''
  }

  constructor(private eventService: EventsService, private router: Router) { }

  ngOnInit() {
  }

  public add() {
    this.eventService.add(this.newEvent);
    this.router.navigate(['/private/eventlist']);
    console.log (this.newEvent);
  }

}
