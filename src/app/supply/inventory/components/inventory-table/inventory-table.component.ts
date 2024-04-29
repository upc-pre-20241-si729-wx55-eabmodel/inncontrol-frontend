import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {Item} from "../../model/item.entity";

@Component({
  selector: 'app-inventory-table',
  templateUrl: './inventory-table.component.html',
  styleUrl: './inventory-table.component.css'
})
export class InventoryTableComponent implements AfterViewInit {
  items: Item[] = [];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  displayedColumns: string[] = ['id', 'taskName', 'description', 'quantity'];
  dataSource: MatTableDataSource<Item>;
  lastId = 0;

  constructor() {
    this.dataSource = new MatTableDataSource(this.items);

  }

  onItemCreatedEvent($event: Item){
    console.log('Task created');
    this.addNewItem($event); // Pass $event to addNewItem
    this.dataSource._updateChangeSubscription();

  }
  addNewItem(newItem: Item) {
    newItem.id = (++this.lastId).toString(); // Convert the number to a string
    this.items.push(newItem);
    this.dataSource.data = this.items;
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
