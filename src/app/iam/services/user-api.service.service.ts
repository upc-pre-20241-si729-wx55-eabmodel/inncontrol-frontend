import { Injectable } from '@angular/core';
import {BaseService} from "../../shared/services/base.service";
import {User} from "../model/user";
import {HttpClient} from "@angular/common/http";
import {catchError, map, Observable, of, retry} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserApiServiceService extends BaseService<User>{

  constructor(http:HttpClient) {
    super(http);
    this.resourceEndpoint = 'users';
  }
  private readonly baseUrl = 'http://localhost:3000'; // Reemplaza con la URL correcta de tu backend

  // @ts-ignore
  override getAll(): Observable<User[]> {
    return this.http.get<User[]>(this.resourcePath(), this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }

  // Método para obtener un usuario por email
  onGetUserByEmail(email: string): Observable<User | undefined> {
    return this.getAll().pipe(
      map(users => users.find(user => user.email === email))
    );
  }
  onGetUserByPassword(password: string): Observable<User | undefined> {
    return this.getAll().pipe(
      map(users => users.find(user => user.password === password))
    );

  }
  userExistsByEmail(email: string ): Observable<boolean> {
    return this.onGetUserByEmail(email).pipe(
      map(user =>  user?.email == email), // Emite true si el usuario existe, false en caso contrario
      catchError(error => of(false)) // Emite false en caso de error
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
    const url = `${this.baseUrl}/users/${id}`; // Aquí se especifica el ID del usuario en la URL
    return this.http.put<User>(url, updatedUserData, this.httpOptions).pipe(
      catchError(error => {
        console.error('Error updating user:', error);
        throw error;
      })
    );
  }


}
