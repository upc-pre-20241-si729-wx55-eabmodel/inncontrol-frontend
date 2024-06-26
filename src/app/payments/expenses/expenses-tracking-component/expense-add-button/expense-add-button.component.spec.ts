import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpenseAddButtonComponent } from './expense-add-button.component';

describe('ExpenseAddButtonComponent', () => {
  let component: ExpenseAddButtonComponent;
  let fixture: ComponentFixture<ExpenseAddButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExpenseAddButtonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExpenseAddButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
