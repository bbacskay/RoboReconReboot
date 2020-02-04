import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SeasonlistPage } from './seasonlist.page';

describe('SeasonlistPage', () => {
  let component: SeasonlistPage;
  let fixture: ComponentFixture<SeasonlistPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeasonlistPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SeasonlistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
