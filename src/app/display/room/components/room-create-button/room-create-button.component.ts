import {Component, EventEmitter, Output} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {RoomCreateDialogComponent} from "../room-create-dialog/room-create-dialog.component";
import {Room} from "../../model/room.entity";

@Component({
  selector: 'app-room-create-button',
  templateUrl: './room-create-button.component.html',
  styleUrl: './room-create-button.component.css'
})
export class RoomCreateButtonComponent {

  @Output() roomCreated = new EventEmitter<Room>();

  selectedItem: Room | null = null;

  constructor(private dialog: MatDialog) {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(RoomCreateDialogComponent, {
      data: new Room('1', 101, 'Guest 1', 'pending', new Date())
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log(result);
        this.selectedItem = result;
        // @ts-ignore
        this.roomCreated.emit(this.selectedItem);
      }
    });
  }
}
