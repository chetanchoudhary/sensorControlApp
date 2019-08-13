import { TestBed } from '@angular/core/testing';

import { Dht11Service } from './dht11.service';

describe('Dht11Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Dht11Service = TestBed.get(Dht11Service);
    expect(service).toBeTruthy();
  });
});
