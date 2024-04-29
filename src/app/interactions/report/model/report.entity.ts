export class Report {

  reporterId: number;
  subject: string;
  description: string;

  constructor(reporterId: number, subject: string, description: string) {
    this.reporterId = reporterId;
    this.subject = subject;
    this.description = description;
  }
}
