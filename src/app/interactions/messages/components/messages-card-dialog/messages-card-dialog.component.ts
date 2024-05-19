import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";

@Component({
  selector: 'app-messages-card-dialog',
  templateUrl: './messages-card-dialog.component.html',
  styleUrl: './messages-card-dialog.component.css'
})
export class MessagesCardDialogComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
  }

}
