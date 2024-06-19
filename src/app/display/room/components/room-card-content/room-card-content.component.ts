import { Component } from '@angular/core';
import {RoomRequest} from "../../model/room.request";

@Component({
  selector: 'app-room-card-content',
  templateUrl: './room-card-content.component.html',
  styleUrl: './room-card-content.component.css'
})
export class RoomCardContentComponent {

  roomsData: RoomRequest[] = [];
  length: number = 1;

  createRoom($event: RoomRequest) {
    console.log('Task created');
    this.length++;
    $event.id = this.length;
    console.log($event);
    this.roomsData.push($event);
  }

}
