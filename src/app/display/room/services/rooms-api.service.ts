import { Injectable } from '@angular/core';
import {BaseService} from "../../../shared/services/base.service";
import {HttpClient} from "@angular/common/http";
import {Rooms} from "../model/room.entity";

@Injectable({
  providedIn: 'root'
})
export class RoomsApiService extends BaseService<Rooms>{

  constructor(httpClient: HttpClient) {
    super(httpClient);
    this.resourceEndpoint = '/rooms';
  }
}
