import { Component, OnInit } from '@angular/core';
import { Event } from '../../../interfaces/event';
import { EventsService } from '../../../services/events.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertService } from '../../../services/alert.service';

@Component({
  selector: 'app-eventedit',
  templateUrl: './eventedit.page.html',
  styleUrls: ['./eventedit.page.scss'],
})
export class EventeditPage implements OnInit {

  public eventId: string = '';
  public eventData: Event = <Event>{
    id: 0,
    baEventKey: '',
    name: '',
    location: '',
    startDate: '',
    endDate: '',
  };

  constructor(private events: EventsService,
              private route: ActivatedRoute,
              private router: Router,
              private alertService: AlertService) { }

  ngOnInit() {
    this.eventId = this.route.snapshot.paramMap.get('eventid');

    this.eventData = this.events.events.value.find(event => event.id == Number(this.eventId));
    
    console.log('eventid = ' + this.eventId);
    console.log(this.eventData);
  }

  public update() {
    this.events.update(this.eventData);
    this.router.navigate(['/private/eventlist']);
  };
}
