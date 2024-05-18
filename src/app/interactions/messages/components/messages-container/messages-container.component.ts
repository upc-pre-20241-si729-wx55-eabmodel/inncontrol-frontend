import {Component, OnInit} from '@angular/core';
import { Messages } from '../../model/messages.entity';
import { MessagesApiService } from '../../service/messages-api.service';


@Component({
  selector: 'app-messages-container',
  templateUrl: './messages-container.component.html',
  styleUrl: './messages-container.component.css'
})
export class MessagesContainerComponent implements OnInit{

  recieveFilter(event: any) {
    console.log('Evento recibido del hijo:', event);
  }

  searchFilter(event: any) {
    console.log('Evento recibido del hijo:', event);
  }

  message: Messages;

  options: {title: string}[] = [
    {
      title: 'Sent'
    },
    {
      title: 'Unread'
    }
  ];

  constructor(private messagesApiService: MessagesApiService) {
  this.message = new Messages(0,0,0,'','','','');
  }


  getMessages() {
    this.messagesApiService.getById(1).subscribe(
      (data: Messages) => {
        this.message.messages = data.messages;
        console.log(this.message.getMessages())
      },
      (error: any) => {
        console.log('Error getting messages')
        console.error(error);
      });
  }


  OpenMessageDialog() {
    console.log('Open Message Dialog');
  }

  ngOnInit() {
    this.getMessages();
  }




}
