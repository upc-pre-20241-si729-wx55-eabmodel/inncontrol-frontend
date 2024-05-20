import {Component, Output, EventEmitter} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {Task} from "../../model/task.entity";
import {TaskCreateDialogComponent} from "../task-create-dialog/task-create-dialog.component";


@Component({
  selector: 'app-task-creation',
  templateUrl: './task-creation.component.html',
  styleUrl: './task-creation.component.css'
})

export class TaskCreationComponent {

  @Output() taskCreated = new EventEmitter<Task>();

  selectedItem: Task | null = null;

  constructor(private dialog: MatDialog) {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(TaskCreateDialogComponent, {
      data: new Task(0, '', '', new Date(), '', new Date(), '')
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log(result);
        this.selectedItem = result;
        // @ts-ignore
        this.taskCreated.emit(this.selectedItem);
      }
    });
  }


}
