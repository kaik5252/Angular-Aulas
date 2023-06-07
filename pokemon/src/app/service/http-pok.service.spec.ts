import { TestBed } from '@angular/core/testing';

import { HttpPokService } from './http-pok.service';

describe('HttpPokService', () => {
  let service: HttpPokService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpPokService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
