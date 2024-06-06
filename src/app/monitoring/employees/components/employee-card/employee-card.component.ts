import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-employee-card',
  templateUrl: './employee-card.component.html',
  styleUrl: './employee-card.component.css'
})
export class EmployeeCardComponent {
  @Input() employee: any;
  @Output() clicked = new EventEmitter<unknown>();
  @Output() deleted = new EventEmitter<unknown>();
  Menu: boolean;
  @Output() updated = new EventEmitter<unknown>();

  constructor() {
    this.Menu = false;
    console.log('Employee: ', this.employee);
  }

  delete() {

  }

  changeState() {

  }

  clickedMenu() {
    this.Menu = true;
  }

  clickedEmployee() {

      if (!this.Menu) {
        console.log('Clicked');
        this.clicked.emit();
      }


  }
}
