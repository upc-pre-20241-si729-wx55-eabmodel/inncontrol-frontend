import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpenseViewComponentComponent } from './expense-view-component.component';

describe('ExpenseViewComponentComponent', () => {
  let component: ExpenseViewComponentComponent;
  let fixture: ComponentFixture<ExpenseViewComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExpenseViewComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpenseViewComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
