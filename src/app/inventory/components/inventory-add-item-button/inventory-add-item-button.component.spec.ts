import { ComponentFixture, TestBed } from '@angular/core/testing';

import {TaskCreator} from './inventory-add-item-button.component';

describe('InventoryAddItemButtonComponent', () => {
  let component: TaskCreator;
  let fixture: ComponentFixture<TaskCreator>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TaskCreator]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskCreator);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
