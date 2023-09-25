import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductModalEditComponent } from './product-modal-edit.component';

describe('ProductModalEditComponent', () => {
  let component: ProductModalEditComponent;
  let fixture: ComponentFixture<ProductModalEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductModalEditComponent]
    });
    fixture = TestBed.createComponent(ProductModalEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
