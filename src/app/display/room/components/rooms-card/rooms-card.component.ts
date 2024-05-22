import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-rooms-card',
  templateUrl: './rooms-card.component.html',
  styleUrl: './rooms-card.component.css'
})
export class RoomsCardComponent {
  @Input() description: any;
  @Output() stateroom = new EventEmitter();
  @Output() deletedroom = new EventEmitter();
  Occupied: boolean = false;
  @Output() clicked = new EventEmitter<unknown>();
  Menu: boolean;


  constructor() {
    this.Menu = false;
  }



  ngOnInit() {

    if(this.description.state === 'Occupied') {
      this.Occupied = true;
    }else {
      this.Occupied = false;
    }


  }



  changeStateRooms() {
    this.Menu = false;
    this.Occupied = false;
    return this.stateroom.emit(this.description.id);

  }
  delete() {
    this.Menu = false;
    return this.deletedroom.emit(this.description.id);
  }

  clickedRoom() {
    if (!this.Menu) {
      console.log('Clicked');
      this.clicked.emit();
    }
  }

  clickedMenu() {
    this.Menu = true;
  }

}


