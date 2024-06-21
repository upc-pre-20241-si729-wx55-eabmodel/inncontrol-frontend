import { Injectable } from '@angular/core';
import {BaseService} from "./base.service";
import {User} from "../model/user";
import {HttpClient} from "@angular/common/http";
import {catchError, map, Observable, of, retry} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserApiServiceService extends BaseService<User>{

  constructor(http:HttpClient) {
    super(http);
    this.resourceEndpoint = '/users';
  }

  userExistsByEmail(email: string ): Observable<boolean> {
    return this.getFromCustomEndpoint<User[]>(`users?email=${email}`).pipe(
      map(users => users.length > 0),
      catchError(error => {
        console.error('Error checking if user exists:', error);
        return of(false);
      })
    );
  }

  getUserByEmailAndPassword(email: string, password: string): Observable<User | null> {
    return this.getFromCustomEndpoint<User[]>(`users?email=${email}&password=${password}`).pipe(
      map(users => users.length > 0 ? users[0] : null),
      catchError(error => {
        console.error('Error during login:', error);
        return of(null);
      })
    );
  }

  getUserById(id: number): Observable<User> {
    return this.getFromCustomEndpoint(`users?id=${id}`).pipe(
      map(users => {
        // @ts-ignore
        if (users.length > 0) {
          // @ts-ignore
          return users[0];
        } else {
          throw new Error('User not found');
        }
      })
    );
  }
// Método para actualizar un usuario
  updateUser(id: number, updatedUserData: Partial<User>): Observable<User> {
    const url = `${this.basePath}/users/${id}`; // Aquí se especifica el ID del usuario en la URL
    return this.http.put<User>(url, updatedUserData, this.httpOptions).pipe(
      catchError(error => {
        console.error('Error updating user:', error);
        throw error;
      })
    );
  }


}
