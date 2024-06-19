import { Injectable } from '@angular/core';
import {BaseService} from "../../../shared/services/base.service";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {Room} from "../model/room.entity";
import {environment} from "../../../../environments/environment";
import {catchError, Observable, throwError} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class RoomsApiService extends BaseService<Room>{

  constructor(private httpClient: HttpClient) {
    super(httpClient);
    this.resourceEndpoint = '/rooms';
  }
  createRoom(room: any): Observable<any> {
    return this.httpClient.post(`${environment.serverBasePath}${this.resourceEndpoint}`, room);
  }

}
