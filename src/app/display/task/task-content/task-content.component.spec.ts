import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskContentComponent } from './task-content.component';

describe('TaskContentComponent', () => {
  let component: TaskContentComponent;
  let fixture: ComponentFixture<TaskContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TaskContentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TaskContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
