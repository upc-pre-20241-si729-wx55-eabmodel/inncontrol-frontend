import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Task } from '../model/task.entity';
import { BaseService } from '../../../../shared/services/base.service';

@Injectable({
  providedIn: 'root'
})
export class TaskApiService extends BaseService<Task> {

  constructor(http: HttpClient) {
    super(http);
    this.resourceEndpoint = '/tasks';
  }
}
