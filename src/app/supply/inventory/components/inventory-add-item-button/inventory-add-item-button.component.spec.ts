import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryAddItemButtonComponent } from './inventory-add-item-button.component';

describe('InventoryAddItemButtonComponent', () => {
  let component: InventoryAddItemButtonComponent;
  let fixture: ComponentFixture<InventoryAddItemButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InventoryAddItemButtonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InventoryAddItemButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
