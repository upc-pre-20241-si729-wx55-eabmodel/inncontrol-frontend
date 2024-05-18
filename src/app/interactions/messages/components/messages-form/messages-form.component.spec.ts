import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessagesFormComponent } from './messages-form.component';

describe('ReportFormComponent', () => {
  let component: MessagesFormComponent;
  let fixture: ComponentFixture<MessagesFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MessagesFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MessagesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
