import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {ItemsEntity} from "../../../display/components/task-create-dialog/models/items.entity";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";

@Component({
  selector: 'app-task-view',
  templateUrl: './task-view.component.html',
  styleUrl: './task-view.component.css'
})
export class TaskViewComponent implements AfterViewInit{
  items: ItemsEntity[] = [];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  displayedColumns: string[] = ['id', 'taskName', 'description', 'quantity'];
  dataSource: MatTableDataSource<ItemsEntity>;

  constructor() {
    this.dataSource = new MatTableDataSource(this.items);

  }

  taskCreatedevent($event: ItemsEntity){
    console.log('Task created');
    this.items.push($event);
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
