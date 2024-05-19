import { Component, OnInit} from '@angular/core';
import {Task} from "../task-create/model/task.entity";
import {TaskApiService} from "../task-create/services/task-api.service";

@Component({
  selector: 'app-task-content',
  templateUrl: './task-content.component.html',
  styleUrl: './task-content.component.css'
})
export class TaskContentComponent implements OnInit {
  tasksData: Task[] = [];

  constructor(private taskService: TaskApiService) {}

  private getAllTasks(): void {
    this.taskService.getAll().subscribe((response: any)=>{
      this.tasksData = response;
    })
  }

  protected createTask(task: Task){
    this.taskService.create(task).subscribe((response: any)=>{
      this.tasksData.push(response);
    });
  };

  ngOnInit() {
    this.getAllTasks();
  }

}
