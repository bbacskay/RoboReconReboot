import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchscoutingPage } from './matchscouting.page';

describe('MatchscoutingPage', () => {
  let component: MatchscoutingPage;
  let fixture: ComponentFixture<MatchscoutingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatchscoutingPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchscoutingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
