import {Component, Inject} from '@angular/core';
import {TaskEntity} from "../models/task.entity";
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,

} from '@angular/material/dialog';


// @ts-ignore
@Component({
  selector: 'app-task-creation',
  templateUrl: './task-creation.component.html',
  styleUrl: './task-creation.component.css'
})

export class TaskCreator {

  tasks: TaskEntity[] = [];
  selectedTask: TaskEntity | null = null;

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      data: new TaskEntity('', '', '', new Date(), '', new Date(), new Date(), '')
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if (result) {
        this.tasks.push(result);
        console.log(this.tasks);
        this.selectedTask = result; // Asignar la tarea seleccionada
      }
    });
  }

}


@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: '../service/task-dialog.html',

})
export class DialogOverviewExampleDialog {
  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: TaskEntity,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
