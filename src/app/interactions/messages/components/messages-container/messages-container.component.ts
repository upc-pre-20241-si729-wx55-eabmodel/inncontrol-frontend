import {Component, OnInit} from '@angular/core';
import {Messages} from '../../model/messages.entity';
import {MessagesApiService} from '../../service/messages-api.service';
import {UsermessageEntity} from "../../model/usermessage.entity";

import {MessagesCardDialogComponent} from "../messages-card-dialog/messages-card-dialog.component";

import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-messages-container',
  templateUrl: './messages-container.component.html',
  styleUrl: './messages-container.component.css'
})
export class MessagesContainerComponent implements OnInit {

  resetMessages: Messages = new Messages(0, 0, 0, '', '', '', 'no');
  message: Messages;

  options: { title: string }[] = [
    {
      title: 'Sent'
    },
    {
      title: 'Unread'
    },
    {
      title: 'Reset'
    }

  ];
  users: UsermessageEntity[];
  loaded: boolean = false;
  unreads: number = 0;
  unread: boolean = false;

  constructor(private messagesApiService: MessagesApiService, private dialog: MatDialog) {
    this.message = new Messages(0, 0, 0, '', '', '', 'no');
    this.users = [];
  }

  badgeControl() {
    this.unreads = this.message.getUnreadSize();
    this.unread = this.unreads <= 0;
    console.log('Unread Messages:', this.unreads, this.unread);
  }

  recieveFilter(event: any) {
    console.log('Evento recibido del hijo:', event);
    this.message.messages = this.resetMessages.messages;
    if (event === 'Sent') {
      this.message.messages = this.message.getMessageBySenderId(1);
    } else if (event === 'Unread') {
      this.message.messages = this.message.getMessageByUnreadStatus();
    } else if (event === 'Reset') {
      this.message.messages = this.resetMessages.messages;
    }

  }

  searchFilter(event: any) {
    console.log('Evento recibido del hijo:', event);
  }


  getMessages() {
    this.messagesApiService.getById(1).subscribe(
      (data: Messages) => {
        this.message.messages = data.messages;
        this.resetMessages.messages = data.messages;
      },
      (error: any) => {
        console.log('Error getting messages')
        console.error(error);
      },
      () => {
        this.messagesApiService.getAll().subscribe(
          (data: any) => {
            let i: number = 0;
            data.forEach((user: any) => {

                this.users.push(new UsermessageEntity(user.id, user.name));
                this.loaded = true;
                this.message.messages = this.message.setSenderReciever(this.users[i].id, this.users[i].concatName());

                i++;

              }, (error: any) => {
                console.log('Error getting users')
                console.error(error);
              }
            );

          });
        this.loaded = true;
        this.badgeControl();

      }
    );


  }


  OpenMessageDialog() {
    console.log('Open Message Dialog');
  }

  updateMessages(id: number) {
    console.log('Update Messages:', this.message);
    this.messagesApiService.patch(id, this.message).subscribe();
  }

  getData() {
    this.getMessages();
  }

  ngOnInit() {
    this.getData();
  }

  deletemessage($event: any) {
    console.log('Evento recibido del hijo:', $event);
    this.message.deleteMessage($event);
    this.updateMessages(1);
  }

  openDialog(messages: any): void {
    const dialogRef = this.dialog.open(MessagesCardDialogComponent, {
      data: messages
    });
  }

  changeState($event: any) {
    console.log('Evento recibido del hijo:', $event);
    this.message.changeState($event, 'read');
    this.updateMessages(1);
    this.badgeControl();
  }
}
