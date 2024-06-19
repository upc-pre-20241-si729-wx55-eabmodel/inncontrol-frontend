import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import { Room } from '../../model/room.entity';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { RoomsApiService } from '../../services/rooms-api.service';
import {RoomRequest} from "../../model/room.request";

@Component({
  selector: 'app-room-report',
  templateUrl: './rooms-report.component.html',
  styleUrls: ['./rooms-report.component.css']
})

// THIS COMPONETS IS UNUSED, THE COMPONETS IN ROOM-CARD-CONTENT
export class RoomsReportComponent implements AfterViewInit, OnInit {
  tasks: RoomRequest[] = [];
  length: number = 1;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  displayedColumns: string[] = ['roomNumber', 'guest', 'state', 'reservation'];
  dataSource: MatTableDataSource<RoomRequest>;

  constructor(private roomsApiService: RoomsApiService) {
    this.dataSource = new MatTableDataSource(this.tasks);
  }

  ngOnInit(): void {
       console.log('Fetching rooms');
    }

  onRoomCreatedEvent($event: RoomRequest) {
    console.log('Task created');
    this.length++;
    $event.id = this.length;
    console.log($event);
    this.tasks.push($event);
    this.dataSource._updateChangeSubscription();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.fetchRooms();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  fetchRooms() {
    console.log('Fetching rooms');
    console.log('Fetching rooms');
    console.log('Fetching rooms');
    console.log('Fetching rooms');
    console.log('Fetching rooms');
    this.roomsApiService.getAll().subscribe(response => {
      console.log(response);
      this.tasks = response.map((room: any) => new RoomRequest(
        room.id,
        room.fullName,
        room.roomType,
        room.roomStatus,
        room.roomNumber,
        room.roomReservation
      ));
      console.log(this.tasks);
      console.log(response);
      this.dataSource = new MatTableDataSource(this.tasks);
      console.log(this.tasks);
      console.log(response);
    });
  }
}
