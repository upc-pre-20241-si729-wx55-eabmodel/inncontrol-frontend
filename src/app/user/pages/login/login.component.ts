import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {UserApiServiceService} from "../../services/user-api.service.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {RoleUser} from "../../model/roll-user";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  myForm: FormGroup = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });
  password: string;
  email: string;
  id: number;
  rollUser:RoleUser;
  constructor(private userService: UserApiServiceService, private snackBar: MatSnackBar) {
    this.email = '';
    this.password = '';
    this.id = 0;
    this.rollUser = RoleUser.Employee;

  }
  singInAccount() {
console.log(this.rollUser)
    if (this.myForm.valid) {
      console.log(this.email);

      this.userService.userExistsByEmail(this.email).subscribe(exists => {
        if (exists) {


          this.userService.userExistsByPassword(this.password).subscribe(exists=>{
              if(exists){
                console.log('User exists');
                this.userService.onGetUserByEmail(this.email).subscribe(
                  user => {
                    // @ts-ignore
                    this.id = user?.id;
                    localStorage.setItem('id', this.id.toString());
                    localStorage.setItem('email', this.email);//remplazar por el roll user
                  });
              } else {
                this.showErrorMessage('password incorrect');
              }
            })
        } else {
          console.log('User does not exist');
          this.showErrorMessage('User does not exist');
        }
      });
    }
  }
  showErrorMessage(message: string): void {
    this.snackBar.open(message, 'Close', {
      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
      panelClass: ['error-snackbar']
    });
  }
setRolleUser(rollUser: number) {
  if (rollUser == 1) {
    this.rollUser = RoleUser.Employee;
  }
  if (rollUser == 2){
    this.rollUser = RoleUser.Manager;}
  }
}