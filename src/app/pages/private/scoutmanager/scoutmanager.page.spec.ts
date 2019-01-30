import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScoutmanagerPage } from './scoutmanager.page';

describe('ScoutmanagerPage', () => {
  let component: ScoutmanagerPage;
  let fixture: ComponentFixture<ScoutmanagerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScoutmanagerPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScoutmanagerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
