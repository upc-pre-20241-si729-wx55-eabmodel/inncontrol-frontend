import {Injectable} from '@angular/core';
import {UserApiServiceService} from "./user-api.service.service";
import {User} from "../../iam/model/user";

@Injectable({
  providedIn: 'root'
})
export class IamStorageService {

  private user: User | null = null;

  constructor(private userApi: UserApiServiceService) {
    this.user = null;
  }

  isLoggedIn(): boolean {
    return this.user !== null;
  }

  hasCredentials(): boolean {
    return localStorage.getItem('id') !== null;
  }

  removeCredentials(): void {
    localStorage.removeItem('id');
    localStorage.removeItem('email');
    localStorage.removeItem('password');
    localStorage.removeItem('rollUser');
  }

  saveCredentials(id: number, email: string, password: string, rollUser: number): void {
    localStorage.setItem('id', String(id));
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);
    localStorage.setItem('rollUser', String(rollUser));
  }

  retrieveCredentials(): { id: number, email: string, password: string, rollUser: number } {
    return {
      id: Number(localStorage.getItem('id')),
      email: localStorage.getItem('email') || '',
      password: localStorage.getItem('password') || '',
      rollUser: Number(localStorage.getItem('rollUser'))
    };
  }

  validLogin() {
    if (!this.hasCredentials()) {
      return false;
    }
    const credentials = this.retrieveCredentials();
    return this.userApi.getUserByEmailAndPassword(credentials.email, credentials.password).subscribe(user => {
        if (user) {
          this.user = user;
        }
      },
      error => {
        console.error('An error occurred during login');
        return false;
      },
      () => {
        return this.user !== null;
      });
  }
}
