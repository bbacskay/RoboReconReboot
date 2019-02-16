import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchaddPage } from './matchadd.page';

describe('MatchaddPage', () => {
  let component: MatchaddPage;
  let fixture: ComponentFixture<MatchaddPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatchaddPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchaddPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
