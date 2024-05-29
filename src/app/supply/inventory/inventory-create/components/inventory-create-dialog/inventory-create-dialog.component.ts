import {Component, Inject} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {InventoryCardDialogComponent} from "../../../inventory-card-dialog/inventory-card-dialog.component";
import {Inventory} from "../../model/inventory.entity";

@Component({
  selector: 'app-inventory-create-dialog',
  templateUrl: './inventory-create-dialog.component.html',
  styleUrl: './inventory-create-dialog.component.css'
})
export class InventoryCreateDialogComponent {

  InventoryItemFormGroup: FormGroup;

  constructor(private formBuilder: FormBuilder, public dialogRef: MatDialogRef<InventoryCardDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Inventory,
  ) {
    this.InventoryItemFormGroup = this.formBuilder.group({
      name: new FormControl('',[
        Validators.required
      ]),
      description: new FormControl('',[
        Validators.required
      ]),
      providerId: new FormControl('',[
        Validators.required
      ]),
      providerName: new FormControl('',[
        Validators.required
      ]),
      providerContact: new FormControl('',[
        Validators.required
      ]),
      providerDesc: new FormControl('',[
        Validators.required
      ]),
      quantity: new FormControl('',[
        Validators.required
      ]),
    });
  }

  onNoClick():void{
    this.dialogRef.close();
  }

  onSubmit(): void{
    console.log(this.InventoryItemFormGroup.value.name);

    const formValues = this.InventoryItemFormGroup.value;

    const selectedData = {
      id: formValues.id,
      name: formValues.name,
      description: formValues.description,
      providerId: formValues.providerId,
      providerName: formValues.providerName,
      providerContact: formValues.providerContact,
      providerDesc: formValues.providerDesc,
      quantity: formValues.quantity,
    };
    if(this.InventoryItemFormGroup.valid){
      this.data = selectedData;
      this.dialogRef.close(this.data);
    }
  }

}
