import {Injectable} from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {BehaviorSubject} from "rxjs";
import {Router} from "@angular/router";
import {SignUpResponse} from "../model/sign-up.response";
import {SignUpRequest} from "../model/sign-up.request";
import {SignInResponse} from "../model/sign-in.response";
import {MatSnackBar} from "@angular/material/snack-bar";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  basePath: string = environment.production ? environment.prodBasePath : environment.serverBasePath;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  };
  private signedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private signedInUserId: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  private signedInUserName: BehaviorSubject<string> = new BehaviorSubject<string>('');

  constructor(private router: Router, private http: HttpClient, private snackBar: MatSnackBar) {
  }

  get isSignedIn() {
    return this.signedIn.asObservable();
  }

  get currentUserId() {
    return this.signedInUserId.asObservable();
  }

  get currentUserName() {
    return this.signedInUserName.asObservable();
  }

  signUp(signUpRequest: SignUpRequest) {
    return this.http.post<SignUpResponse>(`${this.basePath}/authentication/sign-up`, signUpRequest, this.httpOptions)
      .subscribe({
        next: (response) => {
          console.log(`Signed up as ${response.username} with id ${response.id}`);
          this.showSnackBar(`Signed up as ${response.username}`);
          this.router.navigate(['/login']).then();
        },
        error: (error) => {
          console.error(`Error signing up: ${error}`);
          this.showSnackBar(`Error signing up: ${error}`);
          this.router.navigate(['/register']).then();
        }
      });
  }

  private showSnackBar(message: string) {
    this.snackBar.open(message, 'Close', {
      duration: 2000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
    });
  }

  signIn(signInRequest: SignUpRequest) {
    console.log(signInRequest);
    return this.http.post<SignInResponse>(`${this.basePath}/authentication/sign-in`, signInRequest, this.httpOptions)
      .subscribe({
        next: (response) => {
          this.signedIn.next(true);
          this.signedInUserId.next(response.id);
          this.signedInUserName.next(response.username);
          localStorage.setItem('token', response.token);
          // console.log(`Signed in as ${response.username} with token ${response.token}`);
          this.showSnackBar(`Signed in as ${response.username}`);
          this.router.navigate(['/']).then();
        },
        error: (error) => {
          console.error(`Error while signing in: ${error}`);
          this.signedIn.next(false);
          this.signedInUserId.next(0);
          this.signedInUserName.next('');
          localStorage.removeItem('token');
          this.showSnackBar(`Check your credentials`);
          this.router.navigate(['/register']).then();
        }
      });
  }

  async verifyToken(): Promise<boolean> {
    // return promise true if token is valid or false is token isn't valid
    const token = localStorage.getItem('token');
    return new Promise((resolve, reject) => {
      if (!token) {
        resolve(false);
      } else {
        this.http.post<SignInResponse>(`${this.basePath}/authentication/verify-token/${token}`, null, this.httpOptions)
          .subscribe({
            next: (response) => {
              this.signedIn.next(true);
              this.signedInUserId.next(response.id);
              this.signedInUserName.next(response.username);
              localStorage.setItem('token', token);
              // console.log(`Retrieved session as ${response.username}`);
              this.showSnackBar(`Retrieved session as ${response.username}`);
              resolve(true);
            },
            error: (error) => {
              // console.error(`Error retrieving session: ${error}`);
              this.signOut();
              resolve(false);
            }
          });
      }
    });
  }

  hasCredentials() {
    return localStorage.getItem('token') !== null;
  }

  // async void retrieve session() {
  async retrieveSession(): Promise<boolean> {
    return new Promise((resolve, reject) => {
      if (this.hasCredentials()) {
        this.verifyToken().then((result) => {
          resolve(result);
        });
      } else {
        resolve(false);
      }
    });
  }

  signOut() {
    this.signedIn.next(false);
    this.signedInUserId.next(0);
    this.signedInUserName.next('');
    localStorage.removeItem('token');
    this.router.navigate(['/login']).then();
  }
}
