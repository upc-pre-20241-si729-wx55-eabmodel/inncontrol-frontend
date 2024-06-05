import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Room} from "../../model/room.entity";

@Component({
  selector: 'app-rooms-card',
  templateUrl: './rooms-card.component.html',
  styleUrl: './rooms-card.component.css'
})
export class RoomsCardComponent {

  @Input() room!: Room;
  @Output() stateRoomEvent = new EventEmitter();
  @Output() deletedRoomEvent = new EventEmitter();
  Occupied: boolean = false;
  @Output() clicked = new EventEmitter<unknown>();
  Menu: boolean;


  constructor() {
    this.Menu = false;
  }

  ngOnInit() {
    this.Occupied = this.room.state === 'occupied';
  }

  changeStateRooms() {
    this.Menu = false;
    this.Occupied = false;
    return this.stateRoomEvent.emit(this.room.state);
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


