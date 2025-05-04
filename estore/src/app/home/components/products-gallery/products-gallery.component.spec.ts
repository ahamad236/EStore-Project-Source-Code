import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsGalleryComponent } from './products-gallery.component';

describe('ProductsGalleryComponent', () => {
  let component: ProductsGalleryComponent;
  let fixture: ComponentFixture<ProductsGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsGalleryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductsGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
