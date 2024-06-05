import { TestBed } from '@angular/core/testing';

import { ScheduleTasksApiServiceService } from './schedule-tasks-api-service.service';

describe('ScheduleTasksApiServiceService', () => {
  let service: ScheduleTasksApiServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScheduleTasksApiServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
