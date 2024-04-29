import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerformanceReport } from './performance-report';

describe('TaskViewComponent', () => {
  let component: PerformanceReport;
  let fixture: ComponentFixture<PerformanceReport>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PerformanceReport]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PerformanceReport);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
