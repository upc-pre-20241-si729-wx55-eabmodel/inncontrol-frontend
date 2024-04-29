import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { RoomEntity } from '../../../display/components/task-create-dialog/models/room.entity';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-performance-report',
  templateUrl: './rooms-report.component.html',
  styleUrls: ['./rooms-report.component.css']
})
export class RoomsReportComponent implements AfterViewInit {
  tasks: RoomEntity[] = [];
  length: number = 1;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  displayedColumns: string[] = ['roomNumber', 'guest', 'state', 'reservation'];
  dataSource: MatTableDataSource<RoomEntity>;

  constructor() {
    this.dataSource = new MatTableDataSource(this.tasks);
    this.tasks.push(new RoomEntity('1', 101, 'Guest 1', 'pending', new Date()));
    this.length = this.tasks.length;
    console.log('Serio ' + this.length);
  }

  taskCreatedevent($event: RoomEntity) {
    console.log('Task created');
    this.length++;
    $event.id = this.length.toString();
    console.log($event);
    this.tasks.push($event);
    this.dataSource._updateChangeSubscription();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
