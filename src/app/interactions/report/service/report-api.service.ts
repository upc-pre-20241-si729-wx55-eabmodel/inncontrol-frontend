import {Injectable} from '@angular/core';
import {BaseService} from "../../../shared/services/base.service";
import {Report} from "../model/report.entity";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ReportApiService extends BaseService<Report> {

  constructor(httpClient: HttpClient) {
    super(httpClient);
    this.resourceEndpoint = 'reports';
  }
}
