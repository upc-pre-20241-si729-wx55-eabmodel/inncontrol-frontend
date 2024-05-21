import { TestBed } from '@angular/core/testing';

import { MessagesApiService } from './messages-api.service';

describe('ReportApiService', () => {
  let service: MessagesApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MessagesApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
