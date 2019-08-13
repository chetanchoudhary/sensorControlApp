import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LedPage } from './led.page';

describe('LedPage', () => {
  let component: LedPage;
  let fixture: ComponentFixture<LedPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LedPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
