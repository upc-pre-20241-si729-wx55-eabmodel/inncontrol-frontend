import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {MatSort} from "@angular/material/sort";
import {MatPaginator} from "@angular/material/paginator";
import {Task} from "../task-create/model/task.entity";

@Component({
  selector: 'app-task-content',
  templateUrl: './task-content.component.html',
  styleUrl: './task-content.component.css'
})
export class TaskContentComponent implements AfterViewInit {
  tasks: Task[] = [];

  length: number = 1;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  displayedColumns: string[] = ['id', 'taskName', 'description', 'dueDate', 'status', 'userid', 'creationDate'];
  dataSource: MatTableDataSource<Task>;

  constructor() {
    this.dataSource = new MatTableDataSource(this.tasks);
    this.tasks.push(new Task('1', 'Task 1', 'Description 1', new Date(), 'pending', new Date(), '1'));
    length = this.tasks.length;
  }

  onTaskCreatedEvent($event: Task) {
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
