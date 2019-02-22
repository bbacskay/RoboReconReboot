import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScoutaddPage } from './scoutadd.page';

describe('ScoutaddPage', () => {
  let component: ScoutaddPage;
  let fixture: ComponentFixture<ScoutaddPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScoutaddPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScoutaddPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
