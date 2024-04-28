import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {ItemsEntity} from "../models/items.entity";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-task-create-dialog',
  templateUrl: './task-create-dialog.component.html',
  styleUrl: './task-create-dialog.component.css'
})
export class TaskCreateDialogComponent {
  reportItemFormGroup: FormGroup;
  constructor(private formBuilder: FormBuilder,
              public dialogRef: MatDialogRef<TaskCreateDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: ItemsEntity,

  ) {
    this.reportItemFormGroup = this.formBuilder.group({
      taskName: new FormControl('', [
        Validators.required,
        Validators.minLength(2)  // This line ensures a minimum of 2 characters
      ]),
      description: new FormControl('', [
        Validators.required,
        Validators.minLength(2)  // This line ensures a minimum of 2 characters
      ]),
      quantity: new FormControl(null, [
        Validators.required,
        Validators.min(0),
        Validators.pattern("^[0-9]*$")  // This line ensures only numeric input
      ])
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onSubmit(): void {
    if (this.reportItemFormGroup.valid) {
      this.data = new ItemsEntity('', this.reportItemFormGroup.value.taskName, this.reportItemFormGroup.value.description, this.reportItemFormGroup.value.quantity);
      this.dialogRef.close(this.data);
    }
  }
}
