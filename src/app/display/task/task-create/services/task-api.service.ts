import {Injectable} from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from '../model/task.entity';

@Injectable({
  providedIn: 'root'
})
export class TaskApiService {
  private apiUrl = 'http://localhost:3000/tasks';  // URL to web api

  constructor(private http: HttpClient) { }

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.apiUrl);
  }

  addTask(task: Task): Observable<Task> {
    return this.http.post<Task>(this.apiUrl, task);
  }
}
