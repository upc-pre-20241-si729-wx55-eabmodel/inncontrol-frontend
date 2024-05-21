import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { UserApiServiceService } from "../../services/user-api.service.service";
import { MatSnackBar } from "@angular/material/snack-bar";
import { RoleUser } from "../../model/roll-user";
import { User } from "../../model/user";

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

  constructor(private userService: UserApiServiceService, private snackBar: MatSnackBar) {
    this.email = '';
    this.password = '';
    this.rolUser = RoleUser.Employee;
  }
  singInAccount() {
    if (this.myForm.valid) {
      this.userService.getUserByEmailAndPassword(this.email, this.password).subscribe(
        (user: User | null) => {
          if (user) {
            console.log(user)
            this.showMessage('Login Successfully');
            localStorage.setItem('id', String(user.id));
            localStorage.setItem('rollUser', String(this.rolUser));
          } else {
            this.showMessage('Invalid email or password');
          }
        },
        error => {
          this.showMessage('An error occurred during login');
        }
      );
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
