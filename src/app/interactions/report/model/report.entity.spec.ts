import {Report} from './report.entity';

describe('ReportEntity', () => {
  it('should create an instance', () => {
    expect(new Report(1,'', '')).toBeTruthy();
  });
});
