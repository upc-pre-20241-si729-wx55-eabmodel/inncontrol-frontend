import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Item} from "../../model/item.entity";

@Component({
  selector: 'app-inventory-add-dialog',
  templateUrl: './inventory-add-dialog.component.html',
  styleUrl: './inventory-add-dialog.component.css'
})
export class InventoryAddDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<InventoryAddDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Item,
  ) {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
