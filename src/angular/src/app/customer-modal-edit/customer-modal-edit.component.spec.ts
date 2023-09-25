import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerModalEditComponent } from './customer-modal-edit.component';

describe('CustomerModalEditComponent', () => {
  let component: CustomerModalEditComponent;
  let fixture: ComponentFixture<CustomerModalEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomerModalEditComponent]
    });
    fixture = TestBed.createComponent(CustomerModalEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});