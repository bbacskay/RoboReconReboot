import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScouteditPage } from './scoutedit.page';

describe('ScouteditPage', () => {
  let component: ScouteditPage;
  let fixture: ComponentFixture<ScouteditPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScouteditPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScouteditPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
