import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {BehaviorSubject} from "rxjs";
import {Router} from "@angular/router";
import {SignUpResponse} from "../model/sign-up.response";
import {SignUpRequest} from "../model/sign-up.request";
import {SignInResponse} from "../model/sign-in.response";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  basePath: string = "http://ryzeon.me:8045/api/v1"
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })};
  private signedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private signedInUserId: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  private signedInUserName: BehaviorSubject<string> = new BehaviorSubject<string>('');

  constructor(private router: Router, private http: HttpClient) {}

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
        next: (response)=>{
          console.log(`Signed up as ${response.username} with id ${response.id}`);

          this.router.navigate(['/login']).then();
        },
        error: (error)=>{
          console.error(`Error signing up: ${error}`);
          this.router.navigate(['/register']).then();
        }
      });
  }

  signIn(signInRequest: SignUpRequest) {
    console.log(signInRequest);
    return this.http.post<SignInResponse>(`${this.basePath}/authentication/sign-in`, signInRequest, this.httpOptions)
      .subscribe({
        next: (response)=>{
          this.signedIn.next(true);
          this.signedInUserId.next(response.id);
          this.signedInUserName.next(response.username);
          localStorage.setItem('token', response.token);
          console.log(`Signed in as ${response.username} with token ${response.token}`);
          this.router.navigate(['/']).then();
        },
        error: (error)=>{
          console.error(`Error while signing in: ${error}`);
          this.signedIn.next(false);
          this.signedInUserId.next(0);
          this.signedInUserName.next('');
          localStorage.removeItem('token');
          this.router.navigate(['/register']).then();
        }
      });
  }

  signOut(){
    this.signedIn.next(false);
    this.signedInUserId.next(0);
    this.signedInUserName.next('');
    localStorage.removeItem('token');
    this.router.navigate(['/sign-in']).then();
  }
}
