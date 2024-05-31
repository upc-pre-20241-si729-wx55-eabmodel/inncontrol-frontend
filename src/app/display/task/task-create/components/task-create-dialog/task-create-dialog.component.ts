import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Task} from "../../model/task.entity";

@Component({
  selector: 'app-task-create-dialog',
  templateUrl: './task-create-dialog.component.html',
  styleUrl: './task-create-dialog.component.css'

})
export class TaskCreateDialogComponent {


  TaskItemFormGroup: FormGroup;

  constructor(private formBuilder: FormBuilder,
              public dialogRef: MatDialogRef<TaskCreateDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Task,
  ) {
    this.TaskItemFormGroup = this.formBuilder.group({
      taskName: new FormControl('', [
        Validators.required,
        Validators.minLength(2)  // This line ensures a minimum of 2 characters
      ]),
      description: new FormControl('', [
        Validators.required,
        Validators.minLength(2)  // This line ensures a minimum of 2 characters
      ]),
      dueDate: new FormControl(new Date().getUTCFullYear(), [
        Validators.required,
      ]),
      dueTime: new FormControl('', [
        Validators.required,
      ]),
      status: new FormControl('', [
        Validators.required,
        Validators.pattern('pending|completed|in progress')  // This line ensures the status is one of the three options

      ]),
      employee: new FormControl('', [
        Validators.required,
        Validators.maxLength(10),  // This line ensures a maximum of 10 characters
        Validators.minLength(2)  // This line ensures a minimum of 2 characters
      ]),


    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }


  onSubmit(): void {
    console.log(this.TaskItemFormGroup.value.dueTime);
    let date: any = new Date();
    let part = this.TaskItemFormGroup.value.dueTime.split(":");
    let hrs = part[0];
    let mins = part[1];

    const formValues = this.TaskItemFormGroup.value;

    const selectedData = {
      id: formValues.id,
      taskName: formValues.taskName,
      description: formValues.description,
      dueDate: formValues.dueDate,
      status: formValues.status,
      creationDate: new Date(),
      employee: formValues.employee,
    };


    if (this.TaskItemFormGroup.valid) {
      date = this.TaskItemFormGroup.value.dueDate;
      date.setHours(hrs, mins, 0);
      this.data = selectedData;
      this.dialogRef.close(this.data);
    }
  }
}
