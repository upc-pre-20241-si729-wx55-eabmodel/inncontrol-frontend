import {Component, Inject} from '@angular/core';
import {ItemEntity} from "../../model/item.entity";
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,

} from '@angular/material/dialog';


// @ts-ignore
@Component({
  selector: 'app-add-item',
  templateUrl: './inventory-add-item-button.component.html',
})

export class addItemButton {

  items: ItemEntity[] = [];
  selectedItem: ItemEntity | null = null;

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogOverviewItemDialog, {
      data: new ItemEntity('', '', '',0)
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if (result) {
        this.items.push(result);
        console.log(this.items);
        this.selectedItem = result;
      }
    });
  }

}


@Component({
  selector: 'dialog-overview-item-dialog',
  templateUrl: '../../service/item-dialog.html',

})
export class DialogOverviewItemDialog {
  constructor(
    public dialogRef: MatDialogRef<DialogOverviewItemDialog>,
    @Inject(MAT_DIALOG_DATA) public data: ItemEntity,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
