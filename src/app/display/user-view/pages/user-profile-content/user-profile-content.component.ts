import { Component, OnInit } from '@angular/core';
import { User } from '../../../../iam/model/user';
import { UserApiServiceService } from '../../../../shared/services/user-api.service.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import {UserEditDialogComponent} from "../../components/user-edit-dialog/user-edit-dialog.component";

@Component({
  selector: 'app-user-profile-content',
  templateUrl: './user-profile-content.component.html',
  styleUrls: ['./user-profile-content.component.css']
})
export class UserProfileContentComponent implements OnInit {

  userLogged: User;
  roleUser: number;

  constructor(
    private userService: UserApiServiceService,
    private snackBar: MatSnackBar,
    private dialog: MatDialog
  ) {
    this.userLogged = {} as User;
    this.roleUser = Number(localStorage.getItem('rollUser'));
  }

  ngOnInit() {

    this.userService.getUserById(Number(localStorage.getItem('id'))).subscribe(
      (user: User | null) => {
        if (user) {
          this.userLogged = user;
          console.log(this.userLogged);
        } else {
          this.showMessage('Invalid email or password');
        }
      },
      error => {
        this.showMessage('An error occurred during login');
      }
    );
  }

  showMessage(message: string): void {
    this.snackBar.open(message, 'Close', {
      duration: 2000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
      panelClass: ['error-snackbar']
    });
  }

  rollDescription(): string {
    return this.roleUser === 1 ? 'Employee' : 'Manager';
  }

  openEditDialog(): void {
    const dialogRef = this.dialog.open(UserEditDialogComponent, {
      width: '300px',
      data: this.userLogged
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.userLogged = result;
      }
    });
  }
}
