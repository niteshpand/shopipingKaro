import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductChildComponent } from './product-child.component';

describe('ProductChildComponent', () => {
  let component: ProductChildComponent;
  let fixture: ComponentFixture<ProductChildComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductChildComponent]
    });
    fixture = TestBed.createComponent(ProductChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
