import {Component, OnInit} from '@angular/core';
import {RoomRequest} from "../../model/room.request";
import {RoomsApiService} from "../../services/rooms-api.service";
import {catchError, of} from "rxjs";
import {MatSnackBar} from "@angular/material/snack-bar";
import {RoomCreateRequest} from "../../model/room.create-request";

@Component({
  selector: 'app-room-card-content',
  templateUrl: './room-card-content.component.html',
  styleUrl: './room-card-content.component.css'
})
export class RoomCardContentComponent implements  OnInit{
  ngOnInit(): void {
    this.fetchRooms();
  }

  existingRooms: RoomRequest[] = [];
  newRoom: RoomRequest[] = [];
  roomsData: RoomRequest[] = [];
  length: number = 1;

  constructor(private roomsApiService: RoomsApiService, private snackBar: MatSnackBar) {
  }

  createRoom($event: RoomRequest) {
    console.log('Task created');
    const newRoom = new RoomCreateRequest(
      $event.fullName.split(' ')[0], // firstName
      $event.fullName.split(' ')[1], // lastName
      $event.roomType, // type
      $event.roomStatus, // state
      $event.roomNumber, // roomNumber
      new Date(), // initialDate - replace with actual initial date
      new Date() // finalDate - replace with actual final date
    );

    this.roomsApiService.getAll().subscribe(existingRooms => {
      if (existingRooms.some((room: RoomRequest) => room.roomNumber === newRoom.roomNumber)) {
        this.snackBar.open('A room with this number already exists', 'Close', {
          duration: 3000,
          verticalPosition: 'top'
        });
      } else {
        this.roomsApiService.createRoom(newRoom).pipe(
          catchError((error) => {
            console.error('Error occurred:', error);
            this.snackBar.open('An error occurred while creating the room', 'Close', {
              duration: 3000,
              verticalPosition: 'top'
            });
            return of(null); // Return an Observable that completes without emitting any items
          })
        ).subscribe(response => {
          if (response) {
            console.log(response);
            this.length++;
            $event.id = this.length;
            console.log($event);
            this.newRoom.push($event);
            this.existingRooms = [...this.existingRooms, ...this.newRoom];
            this.newRoom = [];
            this.fetchRooms(); // Fetch the rooms again after creating a new room
          }
        });
      }
    });
  }

  fetchRooms() {
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
  onDeleteRoomEvent(id: number) {
    this.fetchRooms();
  }
}
