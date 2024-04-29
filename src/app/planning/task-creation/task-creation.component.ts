import {Component, Output, EventEmitter} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {
  RoomCreateDialogComponent
} from "../../display/room-create/components/room-create-dialog/room-create-dialog.component";
import {Task} from "../../display/task-create/model/task.entity";


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
    const dialogRef = this.dialog.open(RoomCreateDialogComponent, {
      data: new Task('', '', '', new Date(), '', new Date(), '')
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
