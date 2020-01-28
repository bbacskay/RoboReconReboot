import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EventlistPage } from './eventlist.page';

describe('EventlistPage', () => {
  let component: EventlistPage;
  let fixture: ComponentFixture<EventlistPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventlistPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EventlistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
