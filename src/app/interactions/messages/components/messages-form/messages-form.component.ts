import {Component} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Messages} from "../../model/messages.entity";

@Component({
  selector: 'app-messages-form',
  templateUrl: './messages-form.component.html',
  styleUrl: './messages-form.component.css'
})
export class MessagesFormComponent {

  reportFormGroup: FormGroup;

  availableReportSubjects: Array<string>;

  constructor(private formBuilder: FormBuilder, private _snackBar: MatSnackBar, private reportApiService: Messages) {
    this.reportFormGroup = this.formBuilder.group({
      description: new FormControl('', [Validators.required, Validators.minLength(10)]),
      subject: new FormControl('', Validators.required)
    });
    this.availableReportSubjects = [
      'Lorem',
      'Ipsum',
      'Other'
    ];
  }

  onSubmitReport() {
    if (this.reportFormGroup.valid) {
      // @ts-ignore
      const report = new Report(1, this.reportFormGroup.value['subject'], this.reportFormGroup.value['description']);
      this.reportApiService.getMessages(report).subscribe(
        () => {
          this._snackBar.open('Report submitted', 'Close', {
            duration: 2000,
          });
        },
        (error) => {
          this._snackBar.open('Error submitting report', 'Close', {
            duration: 2000,
          });
        }
      );
    }
  }


}
