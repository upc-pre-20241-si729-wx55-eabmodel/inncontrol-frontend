import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {CreateEmployeeRequest} from "../model/create-employee.request";
import {User} from "../model/user";
import {environment} from "../../../environments/environment";
import {BehaviorSubject} from "rxjs";
import {EmployeeResponse} from "../model/employee.response";
import {ProfileResponse} from "../model/profile.response";
import {getRoleUserFromValue} from "../../iam/model/roll-user";

@Injectable({
  providedIn: 'root'
})
export class EmployeeApiService {

  basePath: string = environment.production ? environment.prodBasePath : environment.serverBasePath;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  };

  private currentUser: BehaviorSubject<User> = new BehaviorSubject<User>(
    {} as User // default value
  );

  getCurrentUsername(): string {
    return this.currentUser.value.email;
  }

  getCurrentUser() {
    return this.currentUser.asObservable();
  }

  constructor(protected httpClient: HttpClient) {
  }

  createEmployee(request: CreateEmployeeRequest, email: string): Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {
      this.httpClient.post<EmployeeResponse>(`${this.basePath}/employees`, request, this.httpOptions)
        .subscribe({
          next: (response) => {
            console.log(`Employee created with id ${response}`);
            resolve(true);
          },
          error: (error) => {
            let errorBody = error.error;
            console.log(errorBody);
            reject(errorBody.message);
          }
        })
    });
  }

  setLocalProfile(email: string) {
    this.fetchUser(email).then((user) => {
      console.log(`User fetch with id ${user.id}`);
      console.log(user);
      this.currentUser.next(user);
    });
  }

  fetchFetchProfile(id: number): Promise<ProfileResponse> {
    return new Promise<ProfileResponse>((resolve, reject) => {
      this.httpClient.get<ProfileResponse>(`${this.basePath}/profiles/${id}`)
        .subscribe({
          next: (response) => {
            resolve(response);
          },
          error: (error) => {
            let errorBody = error.error;
            reject(errorBody.message);
          }
        })
    });
  }

  fetchUser(email: string): Promise<User> {
    return new Promise<User>((resolve, reject) => {
      this.httpClient.get<EmployeeResponse>(`${this.basePath}/employees?email=${email}`)
        .subscribe({
          next: (response) => {
            this.fetchFetchProfile(response.profileId).then((profile) => {
              let user = new User();
              user.id = profile.userId;
              user.email = profile.email;
              user.rolUser = getRoleUserFromValue(response.role);
              // user.rolUser = response.rolUser;
              user.names = profile.names;
              user.lastName = profile.lastName;
              user.phoneNumber = profile.phoneNumber;
              user.salary = response.salary;
              user.initialDate = response.initiationContract;
              user.finalDate = response.terminationContract;
              this.currentUser.next(user);
              resolve(user);
            }).catch((error) => {
              // console.log(error);
              reject(error);
            });
          },
          error: (error) => {
            // let errorBody = error.error;
            // console.log(error);
            reject(error);
          }
        })
    });
  }
}
