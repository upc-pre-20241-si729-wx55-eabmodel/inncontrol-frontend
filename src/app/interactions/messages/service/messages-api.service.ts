import {Injectable} from '@angular/core';
import {BaseService} from "../../../shared/services/base.service";
import {HttpClient} from "@angular/common/http";
import {Messages} from "../model/messages.entity";

@Injectable({
  providedIn: 'root'
})
export class MessagesApiService extends BaseService<Messages> {

  constructor(httpClient: HttpClient) {
    super(httpClient);
    this.resourceEndpoint = '/users';
  }
}

