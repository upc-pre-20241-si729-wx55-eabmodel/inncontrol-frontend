import {Component, Output, EventEmitter} from '@angular/core';
import {RoomEntity} from "../../../../display/components/task-create-dialog/models/room.entity";
import {MatDialog} from "@angular/material/dialog";
import {RoomCreateDialogComponent} from "../../../../display/components/task-create-dialog/task-create-dialog/room-create-dialog.component";


@Component({
  selector: 'app-task-creation',
  templateUrl: './room-creation.component.html',
  styleUrl: './room-creation.component.css'
})


export class RoomCreationComponent {



  @Output() taskCreated = new EventEmitter<RoomEntity>();

  selectedItem: RoomEntity | null = null;
  // @ts-ignore



  constructor(private dialog: MatDialog) {
  }


  openDialog(): void {




    // @ts-ignore
    const dialogRef = this.dialog.open(RoomCreateDialogComponent, {
      data: new RoomEntity('', 0, '', '', new Date())
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
