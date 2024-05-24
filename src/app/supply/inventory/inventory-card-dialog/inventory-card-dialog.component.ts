import {Component, EventEmitter, Inject, Input, Output} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Inventory} from "../inventory-create/model/inventory.entity";

@Component({
  selector: 'app-inventory-card-dialog',
  templateUrl: './inventory-card-dialog.component.html',
  styleUrl: './inventory-card-dialog.component.css'
})
export class InventoryCardDialogComponent {
  @Input() inventory!: Inventory;
  @Output() update = new EventEmitter<Inventory>();
  @Output() delete = new EventEmitter<Inventory>();
  @Output() clicked = new EventEmitter<unknown>();

  constructor(public dialogRef: MatDialogRef<InventoryCardDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) {

    console.log('Data received: ', data);
  }

  onNoClick(): void{
    this.dialogRef.close();
  }

  openUpdateDialog(): void {
    console.log('Inventory card dialog open');
    this.update.emit(this.inventory);
  }

}
