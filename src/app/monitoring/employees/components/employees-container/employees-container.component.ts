// src/app/monitoring/employees/components/employees-container/employees-container.component.ts
import {Component, OnInit} from '@angular/core';
import {EmployeeEntity} from "../../model/employee.entity";
import {EmployeeApiService} from "../../service/employee-api.service";
import {MatDialog} from "@angular/material/dialog";
import {EmployeeDialogComponent} from "../employee-dialog/employee-dialog.component";

@Component({
  selector: 'app-employees-container',
  templateUrl: './employees-container.component.html',
  styleUrls: ['./employees-container.component.css']
})
export class EmployeesContainerComponent implements OnInit{
  ResetEmployees: EmployeeEntity[] = [];
  Employees: EmployeeEntity | undefined;
  EmployeesArray: EmployeeEntity[] = [];
  options: {title: string}[] = [
    {
      title: 'Role'
    },
    {
      title: 'Service Hours'
    },
    {
      title: 'Reset'
    }

  ];
  constructor(private employeeApiService: EmployeeApiService, private dialog: MatDialog) {
  }

  getEmployees() {
    this.employeeApiService.getAll().subscribe(
      (data: EmployeeEntity) => {
        this.Employees = (data);
        console.log('Employees:', this.Employees);
        this.EmployeesArray = Object.values(this.Employees);
        this.ResetEmployees = Object.values(this.Employees);
        console.log('EmployeesARR:', this.EmployeesArray);


      },
      (error: any) => {
        console.log('Error getting employees')
        console.error(error);
      }
    );
  }

  ngOnInit() {
    this.getEmployees();

  }

  recieveFilter(event: any) {
    console.log('Evento recibido del hijo:', this.ResetEmployees);
    if (event === 'Role') {
    this.EmployeesArray = this.EmployeesArray.sort((a, b) => a.role.localeCompare(b.role));
    }else if (event === 'Service Hours') {
      this.EmployeesArray.filter((employee) => employee.serviceHours);
    }else if (event === 'Reset') {
      this.EmployeesArray = this.ResetEmployees;
    }
  }

  openDialog(employee: any): void {
    let message = employee;
    console.log('Open Dialog:', message)
    const dialogRef = this.dialog.open(EmployeeDialogComponent, {
      data: message
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
    });
  }

  updateEmployee($event: any) {

  }

  deleteEmployee($event: any) {

  }

  searchFilter(event: any) {
    console.log('Evento recibido del hijo:', event);

  }
}
