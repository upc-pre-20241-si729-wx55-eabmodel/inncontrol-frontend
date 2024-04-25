import {Component} from '@angular/core';

@Component({
  selector: 'app-report-form',
  templateUrl: './report-form.component.html',
  styleUrl: './report-form.component.css'
})
export class ReportFormComponent {

  reportContent: string;

  reportSubject: string;

  availableReportSubjects: Array<string>;

  constructor() {
    this.reportContent = '';
    this.reportSubject = '';
    this.availableReportSubjects = [
      'Lorem',
      'Ipsum'
    ];
  }

  onChooseReportSubject(reportSubject: string) {
    this.reportSubject = reportSubject;
  }

  onSubmitReport() {
    if (this.reportContent && this.reportSubject) {
      console.log('Report submitted');
    }
  }
}
