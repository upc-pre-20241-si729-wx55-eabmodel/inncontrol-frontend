import {Component} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-report-form',
  templateUrl: './report-form.component.html',
  styleUrl: './report-form.component.css'
})
export class ReportFormComponent {

  reportFormGroup: FormGroup;

  availableReportSubjects: Array<string>;

  constructor(private formBuilder: FormBuilder, private _snackBar: MatSnackBar) {
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
      this._snackBar.open('Report submitted', 'Close', {
        duration: 2000,

      });
    }
  }


}
