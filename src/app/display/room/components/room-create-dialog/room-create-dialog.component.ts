import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Room} from "../../model/room.entity";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-room-dialog',
  templateUrl: './room-create-dialog.component.html',
  styleUrls: ['./room-create-dialog.component.css']
})
export class RoomCreateDialogComponent {

  taskForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<RoomCreateDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Room
  ) {
    this.taskForm = this.formBuilder.group({
      roomNumber: new FormControl('', [
        Validators.required,
        Validators.min(1)
      ]),
      guest: new FormControl('', [
        Validators.required,
        Validators.minLength(2)
      ]),
      state: new FormControl('', [
        Validators.required
      ]),
      reservation: new FormControl(new Date(), [
        Validators.required
      ]),
      id: new FormControl('', [
        Validators.required
      ])
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onSubmit(): void {
    const formValues = this.taskForm.value;
    const selectedData: Room = {
      id: '',
      roomNumber: formValues.roomNumber,
      guest: formValues.guest,
      state: formValues.state,
      reservation: new Date(formValues.reservation)
    };

    if (this.taskForm.valid) {
      console.log(selectedData);
      this.data = selectedData;
      this.dialogRef.close(this.data);
    }
  }
}
