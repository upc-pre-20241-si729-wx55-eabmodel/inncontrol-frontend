import {Component, Inject} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Inventory} from "../../model/inventory.entity";

@Component({
  selector: 'app-inventory-edit-dialog',
  templateUrl: './inventory-edit-dialog.component.html',
  styleUrl: './inventory-edit-dialog.component.css'
})
export class InventoryEditDialogComponent {
  InventoryItemFormGroup: FormGroup;

  constructor(private formBuilder: FormBuilder,
              public dialogRef: MatDialogRef<InventoryEditDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Inventory) {

    this.InventoryItemFormGroup = this.formBuilder.group({
      name: new FormControl(data.productTitle,[
        Validators.required
      ]),
      description: new FormControl(data.productDescription,[
        Validators.required
      ]),

      providerName: new FormControl(data.Brand,[
        Validators.required
      ]),


      quantity: new FormControl(data.Quantity,[
        Validators.required
      ]),
    });
  }

  onNoClick():void{
    this.dialogRef.close();
  }

  onSubmit():void{
    if(this.InventoryItemFormGroup.valid){
      const formValues = this.InventoryItemFormGroup.value;

      const updateItem = {
        ...formValues,
        id: this.data.id,
        name: formValues.name,
        description: formValues.description,
        providerId: formValues.providerId,
        providerName: formValues.providerName,
        providerDesc: formValues.providerDesc,
        providerContact: formValues.providerContact,
        quantity: formValues.quantity
      };
      this.dialogRef.close(updateItem);
    }
  }
}
