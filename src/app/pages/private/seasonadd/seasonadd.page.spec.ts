import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SeasonaddPage } from './seasonadd.page';

describe('SeasonaddPage', () => {
  let component: SeasonaddPage;
  let fixture: ComponentFixture<SeasonaddPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeasonaddPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SeasonaddPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
