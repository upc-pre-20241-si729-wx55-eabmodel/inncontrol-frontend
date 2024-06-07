import {Injectable} from '@angular/core';
import {BaseService} from "../../../shared/services/base.service";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Message} from "../model/message.entity";

@Injectable({
  providedIn: 'root'
})
export class MessagesApiService extends BaseService<Message> {

  constructor(private httpClient: HttpClient) {
    super(httpClient);
    this.resourceEndpoint = '/messages';
  }

  getMessageBySenderId(senderId: number): Observable<Message[]> {
    return this.getFromCustomEndpoint(`messages/?from=${senderId}`);
  }
}

