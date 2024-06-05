import { Injectable } from '@angular/core';
import {BaseService} from "../../../shared/services/base.service";
import {CalendarEvent} from "../models/calendar-event";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ScheduleTasksApiServiceService extends BaseService<CalendarEvent>{

  constructor(private httpClient: HttpClient) {
    super(httpClient);
    this.resourceEndpoint = 'calendar-events'; // the endpoint for the calendar events
  }
}
