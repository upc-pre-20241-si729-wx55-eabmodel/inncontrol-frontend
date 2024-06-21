import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {User} from "../../../shared/model/user";
import {UserApiServiceService} from "../../../shared/services/user-api.service.service";
import {RoleUser} from "../../model/roll-user";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Router} from "@angular/router";
import {SignUpRequest} from "../../model/sign-up.request";
import {AuthenticationService} from "../../services/authentication.service";
import {CreateEmployeeRequest} from "../../../shared/model/create-employee.request";
import {ContractInformationResource} from "../../../shared/model/contract-information.resource";
import {EmployeeApiService} from "../../../shared/services/employee-api.service";

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

  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  password: string;

  constructor(private userService: UserApiServiceService, private snackBar: MatSnackBar,
              private router: Router,
              private authenticationService: AuthenticationService,
              private employeeApi: EmployeeApiService
  ) {
    this.rolUser = RoleUser.EMPLOYEE;
    this.firstName = '';
    this.lastName = '';
    this.phoneNumber = '';
    this.email = '';
    this.password = '';
  }

  signUpAccount() {
    if (this.myForm.valid) {
      console.log(this.myForm);
      const roles = [];
      roles.push(RoleUser[this.rolUser].toUpperCase());
      const signUpRequest = new SignUpRequest(this.email, this.password, roles);
      this.authenticationService.signUp(signUpRequest).then(value => {
        if (value) {
          const employeeRequest = new CreateEmployeeRequest(
            this.lastName,
            this.firstName,
            this.phoneNumber,
            this.email,
            1200,
            new ContractInformationResource(
              new Date().toDateString(),
              new Date().toDateString()
            )
          );
          this.employeeApi.createEmployee(employeeRequest, this.email).then((value) => {
            if (value) {
              this.showMessage("Account creation successfully");
            }

          });
        }
      });
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


