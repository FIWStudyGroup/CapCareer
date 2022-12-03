import { TestBed } from '@angular/core/testing';

import { BackendanbindungService } from './backendanbindung.service';

describe('BackendanbindungService', () => {
  let service: BackendanbindungService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BackendanbindungService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
