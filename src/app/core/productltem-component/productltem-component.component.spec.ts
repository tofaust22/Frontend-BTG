import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductltemComponentComponent } from './productltem-component.component';

describe('ProductltemComponentComponent', () => {
  let component: ProductltemComponentComponent;
  let fixture: ComponentFixture<ProductltemComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductltemComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductltemComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
