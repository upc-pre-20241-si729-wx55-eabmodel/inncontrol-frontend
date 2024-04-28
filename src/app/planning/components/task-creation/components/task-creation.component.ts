import {Component, Output, EventEmitter} from '@angular/core';
import {TasksEntity} from "../../../../display/components/task-create-dialog/models/tasks.entity";
import {MatDialog} from "@angular/material/dialog";
import {TaskCreateDialogComponent} from "../../../../display/components/task-create-dialog/task-create-dialog/task-create-dialog.component";


@Component({
  selector: 'app-task-creation',
  templateUrl: './task-creation.component.html',
  styleUrl: './task-creation.component.css'
})


export class TaskCreator {



  @Output() taskCreated = new EventEmitter<TasksEntity>();

  selectedItem: TasksEntity | null = null;
  // @ts-ignore



  constructor(private dialog: MatDialog) {
  }


  openDialog(): void {




    // @ts-ignore
    const dialogRef = this.dialog.open(TaskCreateDialogComponent, {
      data: new TasksEntity('', '', '', new Date(), '', new Date(), ''),

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
