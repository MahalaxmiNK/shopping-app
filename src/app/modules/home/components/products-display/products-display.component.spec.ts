import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsDisplayComponent } from './products-display.component';
import { CarouselComponent } from 'src/app/shared/components/carousel/carousel.component';

describe('ProductsDisplayComponent', () => {
  let component: ProductsDisplayComponent;
  let fixture: ComponentFixture<ProductsDisplayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductsDisplayComponent, CarouselComponent],
    });
    fixture = TestBed.createComponent(ProductsDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display apple products', () => {
    const appleProducts = [
      {
        id: 1,
        title: 'Product 1',
        stock: 5,
        price: 100,
        discountPercentage: 10,
        rating: 4,
        images: ['image1.jpg', 'image2.jpg'],
        brand: 'Apple',
        category: 'smartphones',
      },
      {
        id: 2,
        title: 'Product 2',
        stock: 0,
        price: 150,
        discountPercentage: 20,
        rating: 3,
        images: ['image3.jpg', 'image4.jpg'],
        brand: 'Apple',
        category: 'smartphones',
      },
    ];
    component.appleProducts = appleProducts;
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    const productElements = compiled.querySelectorAll('.product');

    expect(productElements.length).toEqual(appleProducts.length);
  });
});
