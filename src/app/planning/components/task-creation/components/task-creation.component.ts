import {Component, Inject} from '@angular/core';
import {TaskEntity} from "../models/task.entity";
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,

} from '@angular/material/dialog';


export interface DialogData {
  animal: string;
  id: string;
  name: string;
  completion: number;
  description: string;
  dueDate: Date;
  status: string;
  creationDate: Date;
  updateDate: Date;
  userId: string;
}

// @ts-ignore
@Component({
  selector: 'app-task-creation',
  templateUrl: './task-creation.component.html',
  styleUrl: './task-creation.component.css'
})

export class DialogOverviewExample {
  // @ts-ignore
  animal: string;
  name: string | undefined;
  id: string | undefined;
  dueDate: Date | undefined;



  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      data: {name: this.name, animal: this.animal, id: this.id, dueDate: this.dueDate}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
      this.dueDate = result;
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
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}


export class TaskCreationComponent {
}
