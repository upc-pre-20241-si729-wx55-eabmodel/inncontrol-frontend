import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { BaseService } from '../../../../shared/services/base.service';
import {Task} from "../../../../shared/model/task/task.entity";

@Injectable({
  providedIn: 'root'
})
export class TaskApiService extends BaseService<Task> {

  constructor(http: HttpClient) {
    super(http);
    this.resourceEndpoint = '/tasks';
  }
}
