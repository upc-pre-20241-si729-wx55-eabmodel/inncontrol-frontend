import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MessageResponse} from "../../../../shared/model/message/message.response";

@Component({
  selector: 'app-messages-card',
  templateUrl: './messages-card.component.html',
  styleUrl: './messages-card.component.css'
})
export class MessagesCardComponent implements OnInit {
  @Input() message: MessageResponse = new MessageResponse(0, 0, 0, '', '', '');
  @Output() state = new EventEmitter();
  @Output() deleted = new EventEmitter();
  unread: boolean = false;
  @Output() clicked = new EventEmitter<unknown>();
  Menu: boolean;


  constructor() {
    this.Menu = false;
  }


  ngOnInit() {
    this.unread = this.message.status === "SEND";
  }


  changeState() {
    this.Menu = false;
    this.unread = false;
    return this.state.emit(this.message.id);
  }

  delete() {
    this.Menu = false;
    return this.deleted.emit(this.message.id);
  }

  clickedMessage() {
    if (!this.Menu) {
      console.log('Clicked');
      this.clicked.emit();
    }
  }

  clickedMenu() {
    this.Menu = true;
  }

  protected readonly Date = Date;
}
