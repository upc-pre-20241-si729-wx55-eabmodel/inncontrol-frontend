import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Task} from "../../../../shared/model/task/task.entity";

@Component({
  selector: 'app-task-card',
  templateUrl: './task-card.component.html',
  styleUrl: './task-card.component.css'
})
export class TaskCardComponent {
  @Input() task!: Task;
  @Output() update = new EventEmitter<Task>();
  @Output() delete = new EventEmitter<Task>();
  deleteTask(): void {
    this.delete.emit(this.task);
  }
  openUpdateDialog(): void {
    this.update.emit(this.task);
  }
}
