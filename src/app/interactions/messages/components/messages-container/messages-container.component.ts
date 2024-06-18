import {Component, OnInit} from '@angular/core';
import {Messages} from '../../model/messages.entity';
import {MessagesApiService} from '../../service/messages-api.service';
import {UsermessageEntity} from "../../model/usermessage.entity";

import {MessagesCardDialogComponent} from "../messages-card-dialog/messages-card-dialog.component";
import {MessagesNewMessageDialogComponent} from "../messages-new-message-dialog/messages-new-message-dialog.component";

import {MatDialog} from "@angular/material/dialog";
import {Message} from "../../model/message.entity";
import {UserApiServiceService} from "../../../../shared/services/user-api.service.service";
import {AuthenticationService} from "../../../../iam/services/authentication.service";

@Component({
  selector: 'app-messages-container',
  templateUrl: './messages-container.component.html',
  styleUrl: './messages-container.component.css'
})
export class MessagesContainerComponent implements OnInit {

  resetMessages: Messages;
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

  constructor(private messagesApiService: MessagesApiService,
              private dialog: MatDialog,
              private userApiService: UserApiServiceService,
              private iamStorage: AuthenticationService) {
    this.message = new Messages();
    this.resetMessages = new Messages();
    this.users = [];
  }

  badgeControl() {
    this.unreads = this.message.getUnreadSize();
    this.unread = this.unreads <= 0;

  }

  fetchUsers() {
    this.userApiService.getAll().subscribe(
      (data: any) => {
        data.forEach((user: any) => {
          // if (user.id !== this.iamStorage.getUserId()) {
            this.users.push(new UsermessageEntity(user.id, `${user.firstName}.${user.lastName}`));
          // }
        }, (error: any) => {
          console.log('Error getting users')
          console.error(error);
        }
      );
    });
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
    // this.messagesApiService.getById(1).subscribe(
    //   (data: Message) => {
    //     // this.message.addMessage(data);
    //     // this.resetMessages.addMessage(data);
    //   },
    //   (error: any) => {
    //     console.log('Error getting messages')
    //   },
    //   () => {
    //     this.messagesApiService.getMessageBySenderId(this.iamStorage.getUserId()).subscribe(
    //       (data: any) => {
    //         console.log('Data:', data);
    //         let i: number = 0;
    //         data.forEach((messsage: Message) => {
    //             this.message.addMessage(messsage);
    //             this.resetMessages.addMessage(messsage);
    //             this.loaded = true;
    //           this.message = this.message.setSenderReciever(this.iamStorage.getUserId().toString(), this.iamStorage.getUserName());
    //             i++;
    //
    //           }, (error: any) => {
    //             console.log('Error getting users')
    //             console.error(error);
    //           }
    //         );
    //
    //       });
    //     this.loaded = true;
    //     this.badgeControl();
    //   }
    // );
  }

  OpenMessageDialog(messages: any) {

    if (messages) {
      let message = this.message.copyMessage(messages);

      const dialogRef = this.dialog.open(MessagesNewMessageDialogComponent, {
        data: {messages: message, users: this.users}
      });
      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          console.log('The dialog was closed', result);
          console.log('Messages:', this.message);
          this.message.addMessage(result);
          this.badgeControl();
          this.updateMessages(1);
        }
      });

    } else {
      console.log('Open CREATE Message Dialog');
      const dialogRef = this.dialog.open(MessagesNewMessageDialogComponent, {
        data: {
          messages: {
            id: this.message.makeIdValid(),
            subject: 'Message Subject',
            message: 'Message Body...',
            sender: 1,
            date: new Date(),
            receiver: 'Receiver',
            from: 1,
            to: 1
          }, users: this.users
        }
      });
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed', result);
        if (result) {
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

  getData() {
    this.getMessages();
    console.log('Messages:', this.message);
  }

  ngOnInit() {
    this.fetchUsers();
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
      } else if (result === 'Answer') {
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
