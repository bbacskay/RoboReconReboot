import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EventeditPage } from './eventedit.page';

describe('EventeditPage', () => {
  let component: EventeditPage;
  let fixture: ComponentFixture<EventeditPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventeditPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EventeditPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
