import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {TasksEntity} from "../../../display/components/task-create-dialog/models/tasks.entity";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";

@Component({
  selector: 'app-performance-report',
  templateUrl: './performance-report.html',
  styleUrl: './performance-report.css'
})



export class PerformanceReport implements AfterViewInit{
  tasks: TasksEntity[] = [];

  length: number = 1;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  displayedColumns: string[] = ['taskName','userid', 'status'];
  dataSource: MatTableDataSource<TasksEntity>;

  constructor() {
    this.dataSource = new MatTableDataSource(this.tasks);
    this.tasks.push(new TasksEntity('1', 'Task 1', 'Description 1', new Date(), 'pending', new Date(), '1'));
    length = this.tasks.length;
    console.log('Serio '+ this.length);

  }

  taskCreatedevent($event: TasksEntity){
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
