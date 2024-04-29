import {Component, EventEmitter, Output} from '@angular/core';
import {Item} from "../../model/item.entity";
import {MatDialog} from "@angular/material/dialog";
import {InventoryAddDialogComponent} from "../inventory-add-dialog/inventory-add-dialog.component";

@Component({
    selector: 'app-inventory-add-item-button',
    templateUrl: './inventory-add-item-button.component.html',
    styleUrl: './inventory-add-item-button.component.css'
})
export class InventoryAddItemButtonComponent {
  @Output() itemCreated = new EventEmitter<Item>();
  selectedItem: Item | null = null;

    constructor(private dialog: MatDialog) {
    }

    openDialog(): void {
        const dialogRef = this.dialog.open(InventoryAddDialogComponent, {
            data: new Item('', '', '', 0)
        });

        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                this.selectedItem = result;
                // @ts-ignore
              this.itemCreated.emit(this.selectedItem);
            }
        });
    }
}
