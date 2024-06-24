import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {EmployeeResponse} from "../../../../shared/model/employee/employee.response";
import {EmployeeApiService} from "../../../../shared/services/employee-api.service";
import {ProfileResponse} from "../../../../shared/model/employee/profile.response";



@Component({
  selector: 'app-employee-card',
  templateUrl: './employee-card.component.html',
  styleUrls: ['./employee-card.component.css']
})
export class EmployeeCardComponent implements OnInit {
  @Input() employee: any;
  @Output() clicked = new EventEmitter<void>();
  @Output() deleted = new EventEmitter<void>();
  @Output() updated = new EventEmitter<void>();
  Menu: boolean = false;
  @Input() name: any;

  constructor(private employeeApiService: EmployeeApiService) {
  }

  delete() {
    this.deleted.emit(this.employee);
  }


  edit() {
    this.updated.emit(this.employee);
  }

  clickedMenu() {
    this.Menu = true;
  }

  clickedEmployee() {
    if (!this.Menu) {
      console.log('Clicked');
      this.clicked.emit(this.employee);
    }
  }

  ngOnInit(): void {
    console.log('Employee:', this.employee);
    this.getEmployee(this.employee.id);
  }

  getEmployee(id: any) {
    this.employeeApiService.getEmployeeById(id).subscribe((employee) => {
      console.log('Employee:', employee);
      this.employee = employee;
    });
  }
}
