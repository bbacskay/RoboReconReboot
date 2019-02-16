import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatcheditPage } from './matchedit.page';

describe('MatcheditPage', () => {
  let component: MatcheditPage;
  let fixture: ComponentFixture<MatcheditPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatcheditPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatcheditPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
