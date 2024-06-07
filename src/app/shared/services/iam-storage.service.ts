import {Injectable} from '@angular/core';
import {UserApiServiceService} from "./user-api.service.service";
import {User} from "../../iam/model/user";
import {Router} from "@angular/router";
import {RoleUser} from "../../iam/model/roll-user";

@Injectable({
  providedIn: 'root'
})
export class IamStorageService {

  private user: User | null = null;

  constructor(private userApi: UserApiServiceService, private router: Router) {
    this.user = null;
  }

  isLoggedIn(): boolean {
    return this.user !== null;
  }

  hasCredentials(): boolean {
    return localStorage.getItem('id') !== null;
  }

  getRoleUser(): RoleUser {
    return this.user ? this.user.rolUser : RoleUser.None;
  }

  getUserId(): number {
    return this.user ? this.user.id : -1;
  }

  removeCredentials(): void {
    localStorage.removeItem('id');
    localStorage.removeItem('email');
    localStorage.removeItem('password');
    localStorage.removeItem('rollUser');
    this.user = null;
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
          this.router.navigate(['/control']);
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

  getUserName() {
    return this.user ? `${this.user.firstName}.${this.user.lastName}` : '';
  }
}
