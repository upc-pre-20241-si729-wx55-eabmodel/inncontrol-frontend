import { TestBed } from '@angular/core/testing';

import { IamStorageService } from './iam-storage.service';

describe('IamStorageService', () => {
  let service: IamStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IamStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
