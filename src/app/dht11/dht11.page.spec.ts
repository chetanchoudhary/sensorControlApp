import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Dht11Page } from './dht11.page';

describe('Dht11Page', () => {
  let component: Dht11Page;
  let fixture: ComponentFixture<Dht11Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Dht11Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Dht11Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
