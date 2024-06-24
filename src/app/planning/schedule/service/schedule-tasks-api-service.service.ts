import { Injectable } from '@angular/core';
import {BaseService} from "../../../shared/services/base.service";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ScheduleTasksApiServiceService extends BaseService<any>{

  constructor(private httpClient: HttpClient) {
    super(httpClient);
    this.resourceEndpoint = '/calendar-event'; // the endpoint for the calendar events
  }
}
