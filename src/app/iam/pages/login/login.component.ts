import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {UserApiServiceService} from "../../../shared/services/user-api.service.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {RoleUser} from "../../model/roll-user";
import {Router} from "@angular/router";
import {AuthenticationService} from "../../services/authentication.service";
import {SignInRequest} from "../../model/sign-in.request";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  myForm: FormGroup = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });
  password: string;
  email: string;
  rolUser: RoleUser;

  constructor(private userService: UserApiServiceService,
              private snackBar: MatSnackBar,
              private route: Router,
              private iamService: AuthenticationService,
              private authenticationService: AuthenticationService
  ) {
    this.email = '';
    this.password = '';
    this.rolUser = RoleUser.Employee;
  }

  singInAccount() {
    if (this.myForm.valid) {
      const signInRequest = new SignInRequest(this.email, this.password);
      this.authenticationService.signIn(signInRequest);
    } else {
      this.showMessage('Invalid Form');
    }
  }

  showMessage(message: string): void {
    this.snackBar.open(message, 'Close', {
      duration: 2000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
      panelClass: ['error-snackbar']
    });
  }

  setRollUser(rollUser: number) {
    this.rolUser = rollUser === 1 ? RoleUser.Employee : RoleUser.Manager;
  }
}
