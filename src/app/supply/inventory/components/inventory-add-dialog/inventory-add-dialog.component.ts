import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Item} from "../../model/item.entity";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-inventory-add-dialog',
  templateUrl: './inventory-add-dialog.component.html',
  styleUrl: './inventory-add-dialog.component.css'
})
export class InventoryAddDialogComponent {
  reportItemFormGroup: FormGroup;
  constructor(private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<InventoryAddDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Item,
  ) {
    this.reportItemFormGroup = this.formBuilder.group({
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(2)  // minimum 2 characters
      ]),
      description: new FormControl('', [
        Validators.required,
        Validators.minLength(2)
      ]),
      quantity: new FormControl(1, [
        Validators.required,
        Validators.min(1),
        Validators.pattern("^[0-9]*$")  //numeric input
      ])
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onSubmit(): void {
    if (this.reportItemFormGroup.valid) {
      this.data = this.reportItemFormGroup.value;
      this.dialogRef.close(this.data);
    }
  }
}
