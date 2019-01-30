import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeammanagerPage } from './teammanager.page';

describe('TeammanagerPage', () => {
  let component: TeammanagerPage;
  let fixture: ComponentFixture<TeammanagerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeammanagerPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeammanagerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
