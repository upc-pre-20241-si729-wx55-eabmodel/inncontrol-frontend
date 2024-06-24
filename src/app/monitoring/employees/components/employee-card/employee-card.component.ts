import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-employee-card',
  templateUrl: './employee-card.component.html',
  styleUrls: ['./employee-card.component.css']
})
export class EmployeeCardComponent {
  @Input() employee: any;
  @Output() clicked = new EventEmitter<void>();
  @Output() deleted = new EventEmitter<void>();
  @Output() updated = new EventEmitter<void>();
  Menu: boolean = false;

  constructor() {
    console.log('Employee:', this.employee);
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
}
