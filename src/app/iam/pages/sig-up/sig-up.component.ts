import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {User} from "../../model/user";
import {UserApiServiceService} from "../../../shared/services/user-api.service.service";
import {RoleUser} from "../../model/roll-user";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Router} from "@angular/router";

@Component({
  selector: 'app-sig-up',
  templateUrl: './sig-up.component.html',
  styleUrl: './sig-up.component.css'
})
export class SigUpComponent {
  rolUser: RoleUser;

  myForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    lastName: new FormControl('', Validators.required),
    phoneNumber: new FormControl('', Validators.required),
    firstName: new FormControl('', Validators.required)
  });
  userCreated: User;

  constructor(private userService: UserApiServiceService, private snackBar: MatSnackBar, private router: Router) {
    this.userCreated = {} as User;
    this.rolUser = RoleUser.Employee;
  }

  signUpAccount() {
    if (this.myForm.valid) {
      console.log(this.userCreated);
      this.userService.userExistsByEmail(this.userCreated.email).subscribe(exists => {
        if (!exists) {
          this.userService.create(this.userCreated).subscribe(user => {
              console.log(this.userCreated)
              this.userCreated = user;
              this.userCreated.rolUser = this.rolUser;
              console.log('User created successfully');
            },
            error => {
              this.showMessage('Error creating user');
              console.error('Error creating user', error);
            },
            () => {
              console.log('User creation completed');
              this.router.navigate(['/login']);
            });
        } else {
          this.showMessage('User already exists');
        }
      });
    } else {
      this.showMessage('Please fill in all the fields');
    }
  }

  setRollUser(rollUser: number) {
    this.rolUser = rollUser === 1 ? RoleUser.Employee : RoleUser.Manager;
    this.userCreated.rolUser = this.rolUser;
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


