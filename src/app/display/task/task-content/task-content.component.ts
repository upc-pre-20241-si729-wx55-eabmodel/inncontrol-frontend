import { Component, OnInit} from '@angular/core';
import {Task} from "../task-create/model/task.entity";
import {TaskApiService} from "../task-create/services/task-api.service";
import {MatDialog} from "@angular/material/dialog";
import {TaskEditDialogComponent} from "../task-create/components/task-edit-dialog/task-edit-dialog.component";

@Component({
  selector: 'app-task-content',
  templateUrl: './task-content.component.html',
  styleUrl: './task-content.component.css'
})
export class TaskContentComponent implements OnInit {
  tasksData: Task[] = [];

  constructor(private taskService: TaskApiService, private dialog: MatDialog) {}

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
  handleUpdate(task: Task): void {
    this.openUpdateDialog(task);
  }
  onDeleteItem(element: Task) {
    this.deleteTask(element.id);
  }


  private deleteTask(taskId: number): void {
    this.taskService.delete(taskId).subscribe(() => {
      this.tasksData = this.tasksData.filter((task: Task) => task.id !== taskId);
    });
  }
  openUpdateDialog(task: Task): void {
    const dialogRef = this.dialog.open(TaskEditDialogComponent, {
      data: task
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.updateTask(result);
      }
    });
  }
  private updateTask(task: Task): void {
    this.taskService.update(task.id, task).subscribe((response: Task) => {
      const index = this.tasksData.findIndex(t => t.id === task.id);
      if (index !== -1) {
        this.tasksData[index] = response;
      }
    });
  }
  ngOnInit() {
    this.getAllTasks();
  }

}
