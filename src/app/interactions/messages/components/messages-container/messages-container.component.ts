import {Component, OnInit} from '@angular/core';
import { Messages } from '../../model/messages.entity';
import { MessagesApiService } from '../../service/messages-api.service';
import {UsermessageEntity} from "../../model/usermessage.entity";

import {MessagesCardDialogComponent} from "../messages-card-dialog/messages-card-dialog.component";
import {MessagesNewMessageDialogComponent} from "../messages-new-message-dialog/messages-new-message-dialog.component";

import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-messages-container',
  templateUrl: './messages-container.component.html',
  styleUrl: './messages-container.component.css'
})
export class MessagesContainerComponent implements OnInit{

  resetMessages:Messages = new Messages(0,0,0,'','','','no');
  message: Messages;

  options: {title: string}[] = [
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
  constructor(private messagesApiService: MessagesApiService,private dialog: MatDialog){
  this.message = new Messages(0,0,0,'','','','no');
  this.users = [];
  }

  badgeControl()
  {
    this.unreads = this.message.getUnreadSize();
    this.unread = this.unreads <= 0;

  }

  recieveFilter(event: any) {
    console.log('Evento recibido del hijo:', event);
    this.message.messages = this.resetMessages.messages;
    if (event === 'Sent') {
      this.message.messages = this.message.getMessageBySenderId(1);
    }else if (event === 'Unread') {
      this.message.messages = this.message.getMessageByUnreadStatus();
    }else if (event === 'Reset') {
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
          (data: any) =>{
            let i: number = 0;
            data.forEach((user: any)=>{

                this.users.push(new UsermessageEntity(user.id, user.name));
                this.loaded = true;
                this.message.messages = this.message.setSenderReciever(this.users[i].id, this.users[i].concatName());

                i++;

              },(error: any) => {
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






  OpenMessageDialog(messages:any) {

    if (messages) {
      let message = this.message.copyMessage(messages);

      const dialogRef = this.dialog.open(MessagesNewMessageDialogComponent, {
        data: {messages:message, users: this.users}
      });
      dialogRef.afterClosed().subscribe(result => {
        if (result){
          console.log('The dialog was closed', result);
          console.log('Messages:', this.message);
          this.message.addMessage(result);
          this.badgeControl();
          this.updateMessages(1);
      }
      });

    }
    else {
      console.log('Open CREATE Message Dialog');
      const dialogRef = this.dialog.open(MessagesNewMessageDialogComponent, {
        data: {messages:{id: this.message.makeIdValid() , subject: 'Message Subject', message: 'Message Body...', sender: 1, date: new Date(), receiver: 'Receiver',from:1,to:1 }, users: this.users}
      });
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed', result);
        if (result){
          this.message.addMessage(result);
          this.badgeControl();
          this.updateMessages(1);
        }
      });
    }
  }

  updateMessages(id: number) {
    console.log('Update Messages:', this.message);
    this.messagesApiService.patch(id, this.message).subscribe();
  }

  getData(){
    this.getMessages();
    console.log('Messages:', this.message);

  }

  ngOnInit() {
    this.getData();
  }

  deletemessage($event: any) {
    console.log('Evento recibido del hijo:', $event);
    this.message.deleteMessage($event);
    this.badgeControl();
  }

  openDialog(messages: any): void {
    let message = this.message.getMessagesById(messages);
    console.log('Open Dialog:', message)
    const dialogRef = this.dialog.open(MessagesCardDialogComponent, {
      data: message
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
      if (result === 'Delete') {
        this.deletemessage(messages);
      }else if (result === 'Answer') {
        this.OpenMessageDialog(messages);
      }
    });
  }

  changeState($event: any) {
    console.log('Evento recibido del hijo:', $event);
    this.message.changeState($event, 'read');
    this.updateMessages(1);
    this.badgeControl();
  }
}
