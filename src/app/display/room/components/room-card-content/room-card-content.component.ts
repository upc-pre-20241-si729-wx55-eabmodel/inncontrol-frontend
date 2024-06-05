import { Component } from '@angular/core';
import {Room} from "../../model/room.entity";

@Component({
  selector: 'app-room-card-content',
  templateUrl: './room-card-content.component.html',
  styleUrl: './room-card-content.component.css'
})
export class RoomCardContentComponent {

  roomsData: Room[] = [];
  length: number = 1;


  createRoom($event: Room) {
    console.log('Task created');
    this.length++;
    $event.id = this.length.toString();
    console.log($event);
    this.roomsData.push($event);
  }

}
