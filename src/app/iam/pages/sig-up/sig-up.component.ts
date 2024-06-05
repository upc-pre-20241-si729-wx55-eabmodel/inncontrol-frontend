import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {User} from "../../model/user";
import {UserApiServiceService} from "../../services/user-api.service.service";
import {RoleUser} from "../../model/roll-user";

@Component({
  selector: 'app-sig-up',
  templateUrl: './sig-up.component.html',
  styleUrl: './sig-up.component.css'
})
export class SigUpComponent {
  rolUser: RoleUser;

  myForm: FormGroup = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    phoneNumber: new FormControl('', Validators.required),
    firstName: new FormControl('', Validators.required)
  });
  userCreated: User;

  constructor(private userService: UserApiServiceService) {
    this.userCreated = {} as User;
    this.rolUser = RoleUser.Employee;

  }

  signUpAccount() {
    if (this.myForm.valid) {
      this.userService.userExistsByEmail(this.userCreated.email).subscribe(exists => {
        if (!exists) {
          this.userService.create(this.userCreated).subscribe(user => {
              this.userCreated = user;
              this.userCreated.rolUser = this.rolUser;
              console.log('User created successfully');
              localStorage.setItem('id', this.userCreated.id.toString());
              localStorage.setItem('rollUser', String(this.rolUser));
              console.log(this.userCreated)
            },
            error => {
              console.error('Error creating user:', error);
            },
            () => {
              console.log('User creation completed');
            });
        } else {
          alert("User already exists")
        }
      });
    }
  }
  setRollUser(rollUser: number) {
    this.rolUser = rollUser === 1 ? RoleUser.Employee : RoleUser.Manager;
  }
}
