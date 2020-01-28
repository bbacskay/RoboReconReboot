import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EventaddPage } from './eventadd.page';

describe('EventaddPage', () => {
  let component: EventaddPage;
  let fixture: ComponentFixture<EventaddPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventaddPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EventaddPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
