import {Component, OnInit} from '@angular/core';
import {User} from '../../../../shared/model/user';
import {UserApiServiceService} from '../../../../shared/services/user-api.service.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MatDialog} from '@angular/material/dialog';
import {UserEditDialogComponent} from "../../components/user-edit-dialog/user-edit-dialog.component";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-user-profile-content',
  templateUrl: './user-profile-content.component.html',
  styleUrls: ['./user-profile-content.component.css']
})
export class UserProfileContentComponent implements OnInit {

  userLogged: User;
  id: number = 0;

  constructor(
    private userService: UserApiServiceService,
    private snackBar: MatSnackBar,
    private dialog: MatDialog,
    private route: ActivatedRoute
  ) {
    this.userLogged = new User();
  }

  UserProfileContentComponent(index: number) {
    this.id = index;
  }

  ngOnInit() {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.userService.getUserById(this.id).subscribe(
      (user: User | null) => {
        if (user) {
          this.userLogged = user;
        } else {
          this.showMessage('Invalid email or password');
        }
      },
      error => {
        console.error(error);
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
    return this.userLogged.rolUser === 1 ? 'Employee' : 'Manager';
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
