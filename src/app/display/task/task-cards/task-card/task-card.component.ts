import { Component, Input } from '@angular/core';
import {Task} from "../../task-create/model/task.entity";

@Component({
  selector: 'app-task-card',
  templateUrl: './task-card.component.html',
  styleUrl: './task-card.component.css'
})
export class TaskCardComponent {
  @Input() task!: Task;
}
