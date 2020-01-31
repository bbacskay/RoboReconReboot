import { Component, OnInit } from '@angular/core';
import { Event } from '../../../interfaces/event';
import { EventsService } from '../../../services/events.service';
import { Router } from '@angular/router';
import { AlertService } from '../../../services/alert.service';

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

  constructor(private eventService: EventsService, private router: Router,
    private alertService: AlertService) { }

  ngOnInit() {
  }

  public add() {
    this.eventService.add(this.newEvent).then((response) => {
      this.router.navigate(['/private/eventlist']);
      console.log (this.newEvent);
      if (response) {
        this.alertService.presentToast("Event sucessfully added");
      } else {
        this.alertService.presentToast("Error: Event not added");
      }; 
    });
  }
}
