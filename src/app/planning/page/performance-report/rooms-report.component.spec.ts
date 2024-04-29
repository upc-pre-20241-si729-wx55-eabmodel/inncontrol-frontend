import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomsReportComponent } from './rooms-report.component';

describe('TaskViewComponent', () => {
  let component: RoomsReportComponent;
  let fixture: ComponentFixture<RoomsReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RoomsReportComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoomsReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
