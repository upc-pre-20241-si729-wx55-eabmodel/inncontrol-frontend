import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {User} from "../../model/user";
import {UserApiServiceService} from "../../services/user-api.service.service";

@Component({
  selector: 'app-sig-up',
  templateUrl: './sig-up.component.html',
  styleUrl: './sig-up.component.css'
})
export class SigUpComponent {
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
  }

  signUpAccount() {
    if (this.myForm.valid) {
      this.userService.userExistsByEmail(this.userCreated.email).subscribe(exists => {
        if (!exists) {
          this.userService.create(this.userCreated).subscribe(user => {
              this.userCreated = user;
              console.log('User created successfully');
              localStorage.setItem('id', this.userCreated.id.toString());
              localStorage.setItem('email', this.userCreated.email);
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
}
