import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RelayPage } from './relay.page';

describe('RelayPage', () => {
  let component: RelayPage;
  let fixture: ComponentFixture<RelayPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RelayPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RelayPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
