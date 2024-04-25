import {Component} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-report-form',
  templateUrl: './report-form.component.html',
  styleUrl: './report-form.component.css'
})
export class ReportFormComponent {

  reportFormGroup: FormGroup;

  availableReportSubjects: Array<string>;

  constructor(private formBuilder: FormBuilder) {
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
    console.log('Report submitted');
    console.log(this.reportFormGroup.value['subject']);
    console.log(this.reportFormGroup.value['description']);
  }


}
