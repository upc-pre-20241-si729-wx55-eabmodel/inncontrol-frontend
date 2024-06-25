import {Injectable} from '@angular/core';
import {BaseService} from "../../../shared/services/base.service";
import {HttpClient} from "@angular/common/http";
import {CreateMessageRequest} from "../../../shared/model/message/create-message.request";
import {MessageResponse} from "../../../shared/model/message/message.response";
import {catchError, Observable, retry} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MessageApiService extends BaseService<MessageResponse> {

  constructor(http: HttpClient) {
    super(http);
    this.basePath = '/messages';
  }

  createMessage(message: CreateMessageRequest): Observable<MessageResponse> {
    return this.http.post<MessageResponse>(this.resourcePath(), JSON.stringify(message), this.httpOptions).pipe(retry(2), catchError(this.handleError));
  }
}
