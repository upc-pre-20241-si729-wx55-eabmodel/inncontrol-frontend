import {Component} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-report-form',
  templateUrl: './report-form.component.html',
  styleUrl: './report-form.component.css'
})
export class ReportFormComponent {

  reportFormGroup: FormGroup;

  reportContent: string;

  reportSubject: string;

  availableReportSubjects: Array<string>;

  constructor(private formBuilder: FormBuilder) {
    this.reportFormGroup = this.formBuilder.group({
      contentController: new FormControl('', [Validators.required, Validators.minLength(10)]),
      subjectController: new FormControl('', Validators.required)
    });    this.reportContent = '';
    this.reportSubject = '';
    this.availableReportSubjects = [
      'Lorem',
      'Ipsum',
      'Other'
    ];
  }

  onChooseReportSubject(reportSubject: any) {
    this.reportSubject = reportSubject.value;
    console.log('Report subject: ', this.reportSubject);
  }

  onSubmitReport() {
    if (this.reportContent && this.reportSubject) {
      console.log('Report submitted');
    }
  }


}
