import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SeasoneditPage } from './seasonedit.page';

describe('SeasoneditPage', () => {
  let component: SeasoneditPage;
  let fixture: ComponentFixture<SeasoneditPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeasoneditPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SeasoneditPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
