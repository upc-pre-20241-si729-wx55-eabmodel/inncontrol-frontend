import {Component} from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {CreateTaskRequest} from "../../model/create-task.request";
import {MatSnackBar} from "@angular/material/snack-bar";
import {EmployeeApiService} from "../../../../../shared/services/employee-api.service";
import {ProfileResponse} from "../../../../../shared/model/employee/profile.response";

@Component({
  selector: 'app-task-create-dialog',
  templateUrl: './task-create-dialog.component.html',
  styleUrl: './task-create-dialog.component.css'

})
export class TaskCreateDialogComponent {

  TaskItemFormGroup: FormGroup;


  employees: ProfileResponse[] = [];

  constructor(private formBuilder: FormBuilder,
              public dialogRef: MatDialogRef<TaskCreateDialogComponent>,
              private snackBar: MatSnackBar,
              private employeeApiService: EmployeeApiService,
              // @Inject(MAT_DIALOG_DATA) public data: Task,
  ) {
    this.employeeApiService.getAllProfiles().subscribe((employees) => {
      this.employees = employees;
    });
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
      employee: new FormControl('', [
        Validators.required,
      ]),
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  getEmployeesEmails() {
    return this.employees.map((employee) => {
      return employee.names + ", " + employee.lastName + " <" + employee.email + ">";
    });
  }

  getEmailFromString(email: string) {
    return email.split(" <")[1].split(">")[0];
  }

  onSubmit(): void {
    if (!this.TaskItemFormGroup.valid) {
      this.snackBar.open('Please fill in all fields', 'Close', {
        duration: 3000,
      });
      return;
    }
    console.log(this.TaskItemFormGroup.value.dueTime);
    let date: any = new Date();
    let part = this.TaskItemFormGroup.value.dueTime.split(":");
    let hrs = part[0];
    let mins = part[1];
    let employeeEmail = this.getEmailFromString(this.TaskItemFormGroup.value.employee);

    const formValues = this.TaskItemFormGroup.value;

    if (this.TaskItemFormGroup.valid) {
      date = this.TaskItemFormGroup.value.dueDate;
      date.setHours(hrs, mins, 0);
      // this.data = selectedData;
      const createTask = new CreateTaskRequest(
        formValues.employee,
        formValues.taskName,
        formValues.description,
        date
      );
      this.dialogRef.close(createTask);
    }
  }
}
