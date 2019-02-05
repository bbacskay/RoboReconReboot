import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchlistPage } from './matchlist.page';

describe('MatchlistPage', () => {
  let component: MatchlistPage;
  let fixture: ComponentFixture<MatchlistPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatchlistPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchlistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
