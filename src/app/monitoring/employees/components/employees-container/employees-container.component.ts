import { Component, OnInit } from '@angular/core';
import { MatDialog } from "@angular/material/dialog";
import { EmployeeDialogComponent } from "../employee-dialog/employee-dialog.component";
import {EmployeeResponse} from "../../../../shared/model/employee.response";
import {EmployeeApiService} from "../../../../shared/services/employee-api.service";

@Component({
  selector: 'app-employees-container',
  templateUrl: './employees-container.component.html',
  styleUrls: ['./employees-container.component.css']
})
export class EmployeesContainerComponent implements OnInit {
  ResetEmployees: EmployeeResponse[] = [];
  EmployeesArray: EmployeeResponse[] = [];
  options: { title: string }[] = [
    { title: 'Role' },
    { title: 'Service Hours' },
    { title: 'Reset' }
  ];

  constructor(private employeeApiService: EmployeeApiService, private dialog: MatDialog) {}

  getEmployees(email: string) {
    this.employeeApiService.fetchUser(email).then(
      (data: any) => {
        const employee: EmployeeResponse = {
          employeeId: data.id,
          role: data.rolUser,
          salary: data.salary,
          initiationContract: data.initialDate,
          terminationContract: data.finalDate,
          profileId: data.profileId
        };
        this.EmployeesArray = [employee];
        this.ResetEmployees = [employee];
        console.log('Employees:', this.EmployeesArray);
      },
      (error: any) => {
        console.log('Error getting employees');
        console.error(error);
      }
    );
  }

  ngOnInit() {
    this.getEmployees('example@example.com'); // Replace with actual email
  }

  receiveFilter(event: any) {
    console.log('Event received from child:', event);
    if (event === 'Role') {
      this.EmployeesArray.sort((a, b) => a.role.localeCompare(b.role));
    } else if (event === 'Service Hours') {
      this.EmployeesArray = this.EmployeesArray.filter(employee => employee.initiationContract);
    } else if (event === 'Reset') {
      this.EmployeesArray = [...this.ResetEmployees];
    }
  }

  openDialog(employee: EmployeeResponse): void {
    const dialogRef = this.dialog.open(EmployeeDialogComponent, {
      data: employee
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
    });
  }

  updateEmployee($event: any) {
    // Logic for updating employee
  }

  deleteEmployee($event: any) {
    // Logic for deleting employee
  }

  searchFilter(event: any) {
    console.log('Search event received from child:', event);
  }
}
