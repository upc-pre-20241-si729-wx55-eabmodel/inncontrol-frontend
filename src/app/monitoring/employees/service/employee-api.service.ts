import {Injectable} from "@angular/core";
import {BaseService} from "../../../shared/services/base.service";
import {HttpClient} from "@angular/common/http";
import {EmployeeEntity} from "../model/employee.entity";



@Injectable({
  providedIn: 'root'
})
export class EmployeeApiService extends BaseService<EmployeeEntity>{
  constructor(httpClient: HttpClient) {
  super(httpClient);
  this.resourceEndpoint = '/employees';
}
}
