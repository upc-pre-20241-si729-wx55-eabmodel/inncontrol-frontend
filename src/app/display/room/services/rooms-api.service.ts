import { Injectable } from '@angular/core';
import {BaseService} from "../../../shared/services/base.service";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {Room} from "../model/room.entity";
import {environment} from "../../../../environments/environment";
import {catchError, Observable, throwError} from "rxjs";
import {RoomRequest} from "../model/room.request";
import {RoomResponse} from "../model/room.response";
import {RoomUpdateRequest} from "../model/room.update-request";
import {RoomCreateRequest} from "../model/room.create-request";

@Injectable({
  providedIn: 'root'
})
export class RoomsApiService extends BaseService<Room>{

  constructor(private httpClient: HttpClient) {
    super(httpClient);
    this.resourceEndpoint = '/rooms';
  }

  createRoom(room: RoomCreateRequest): Observable<any> {
    return this.httpClient.post(`${environment.serverBasePath}${this.resourceEndpoint}`, room);
  }

  updateRoom(room: RoomUpdateRequest): Observable<any> {
    return this.httpClient.put(`${environment.serverBasePath}${this.resourceEndpoint}/${room.id}`, room);
  }
}
