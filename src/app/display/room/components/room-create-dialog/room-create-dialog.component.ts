import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {RoomRequest} from "../../model/room.request";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {RoomsApiService} from "../../services/rooms-api.service";
import {RoomResponse} from "../../model/room.response";

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
    @Inject(MAT_DIALOG_DATA) public data: RoomRequest, private roomsApiService: RoomsApiService
  ) {
    this.taskForm = this.formBuilder.group({
      firstName: new FormControl('', [
        Validators.required,
        Validators.minLength(2)
      ]),
      lastName: new FormControl('', [
        Validators.required,
        Validators.minLength(2)
      ]),
      type: new FormControl('', [
        Validators.required
      ]),
      state: new FormControl('', [
        Validators.required
      ]),
      roomNumber: new FormControl('', [
        Validators.required,
        Validators.min(1)
      ]),
      initialDate: new FormControl('', [
        Validators.required
      ]),
      finalDate: new FormControl('', [
        Validators.required
      ]),
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onSubmit(): void {
    const formValues = this.taskForm.value;
    const newRoom = new RoomResponse(
      formValues.firstName,
      formValues.lastName,
      formValues.type,
      formValues.state,
      formValues.roomNumber,
      formValues.initialDate,
      formValues.finalDate
    );

    if (this.taskForm.valid) {
      this.roomsApiService.createRoom(newRoom).subscribe(response => {
        console.log(response);
        this.dialogRef.close(response);
      });
    }
  }
}
