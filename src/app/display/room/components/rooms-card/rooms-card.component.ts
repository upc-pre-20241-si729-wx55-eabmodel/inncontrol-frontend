import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Room} from "../../model/room.entity";
import {RoomRequest} from "../../model/room.request";

@Component({
  selector: 'app-rooms-card',
  templateUrl: './rooms-card.component.html',
  styleUrl: './rooms-card.component.css'
})
export class RoomsCardComponent {

  @Input() room!: RoomRequest;
  @Output() stateRoomEvent = new EventEmitter();
  @Output() deletedRoomEvent = new EventEmitter();
  Occupied: boolean = false;
  @Output() clicked = new EventEmitter<unknown>();
  Menu: boolean;


  constructor() {
    this.Menu = false;
  }

  ngOnInit() {
    this.Occupied = this.room.roomStatus === 'occupied';
  }

  changeStateRooms() {
    this.Menu = false;
    this.Occupied = false;
    return this.stateRoomEvent.emit(this.room.roomStatus);
  }
  delete() {
    this.Menu = false;
    return this.deletedRoomEvent.emit(this.room.id);
  }

  clickedRoom() {
    if (!this.Menu) {
      console.log('Clicked');
      this.clicked.emit();
    }
  }

  clickedMenu() {
    this.Menu = true;
  }

}


