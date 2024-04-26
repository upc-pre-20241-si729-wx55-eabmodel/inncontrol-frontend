import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificactionsViewComponent } from './notificactions-view.component';

describe('NotificactionsViewComponent', () => {
  let component: NotificactionsViewComponent;
  let fixture: ComponentFixture<NotificactionsViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NotificactionsViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NotificactionsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
