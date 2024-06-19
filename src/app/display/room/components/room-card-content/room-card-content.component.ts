import {Component, OnInit} from '@angular/core';
import {RoomRequest} from "../../model/room.request";
import {MatTableDataSource} from "@angular/material/table";
import {RoomsApiService} from "../../services/rooms-api.service";

@Component({
  selector: 'app-room-card-content',
  templateUrl: './room-card-content.component.html',
  styleUrl: './room-card-content.component.css'
})
export class RoomCardContentComponent implements  OnInit{
  ngOnInit(): void {
    this.fetchRooms();
  }

  roomsData: RoomRequest[] = [];
  length: number = 1;

  constructor(private roomsApiService: RoomsApiService) {
  }

  createRoom($event: RoomRequest) {
    console.log('Task created');
    this.length++;
    $event.id = this.length;
    console.log($event);
    this.roomsData.push($event);
  }

  fetchRooms() {
    console.log('Fetching rooms');
    console.log('Fetching rooms');
    console.log('Fetching rooms');
    console.log('Fetching rooms');
    console.log('Fetching rooms');
    this.roomsApiService.getAll().subscribe(response => {
      console.log(response);
      this.roomsData = response.map((room: any) => new RoomRequest(
        room.id,
        room.fullName,
        room.roomType,
        room.roomStatus,
        room.roomNumber,
        room.roomReservation
      ));
      console.log(this.roomsData);
      console.log(response);
      // this.dataSource = new MatTableDataSource(this.tasks);
      // console.log(this.tasks);
      console.log(response);
    });
  }
}
