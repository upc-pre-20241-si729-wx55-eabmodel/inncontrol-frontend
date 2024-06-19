import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {User} from "../../model/user";
import {UserApiServiceService} from "../../../shared/services/user-api.service.service";
import {RoleUser} from "../../model/roll-user";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Router} from "@angular/router";
import {SignUpRequest} from "../../model/sign-up.request";
import {AuthenticationService} from "../../services/authentication.service";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {
  rolUser: RoleUser;

  myForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    lastName: new FormControl('', Validators.required),
    phoneNumber: new FormControl('', Validators.required),
    firstName: new FormControl('', Validators.required)
  });
  userCreated: User;

  constructor(private userService: UserApiServiceService, private snackBar: MatSnackBar,
              private router: Router,
              private authenticationService: AuthenticationService
  ) {
    this.userCreated = {} as User;
    this.rolUser = RoleUser.EMPLOYEE;
  }

  signUpAccount() {
    if (this.myForm.valid) {
      console.log(this.userCreated);
      const roles = [];
      roles.push(RoleUser[this.rolUser].toUpperCase());
      const signUpRequest = new SignUpRequest(this.userCreated.email, this.userCreated.password, roles);
      this.authenticationService.signUp(signUpRequest);
    } else {
      this.showMessage('Please fill in all the fields');
    }
  }

  setRollUser(rollUser: number) {
    this.rolUser = rollUser === 1 ? RoleUser.EMPLOYEE : RoleUser.MANAGER;
  }

  showMessage(message: string): void {
    this.snackBar.open(message, 'Close', {
      duration: 2000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
      panelClass: ['error-snackbar']
    });
  }
}


