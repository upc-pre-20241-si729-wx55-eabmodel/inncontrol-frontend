import {Component, Output, EventEmitter} from '@angular/core';
import {ItemsEntity} from "../../../../display/components/task-create-dialog/models/items.entity";
import {MatDialog} from "@angular/material/dialog";
import {TaskCreateDialogComponent} from "../../../../display/components/task-create-dialog/task-create-dialog/task-create-dialog.component";

@Component({
  selector: 'app-task-creation',
  templateUrl: './task-creation.component.html',
  styleUrl: './task-creation.component.css'
})
export class TaskCreator {

  @Output() taskCreated = new EventEmitter<ItemsEntity>();

  selectedItem: ItemsEntity | null = null;


  constructor(private dialog: MatDialog) {
  }


  openDialog(): void {
    const dialogRef = this.dialog.open(TaskCreateDialogComponent, {
      data: new ItemsEntity('', '', '', 0)
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
