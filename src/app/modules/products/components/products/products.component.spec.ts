import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ProductsComponent } from './products.component';
import { ProductsDisplayComponent } from '../products-display/products-display.component';
import { ProductsService } from '../../services/products.service';
import { of } from 'rxjs';
import { Product } from '../../../../core/models/product.model';

const dummyProducts: { total: number; products: Product[] } = {
  total: 2,
  products: [
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
      description: 'something nice',
      thumbnail: 'Image',
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
      category: 'laptops',
      description: 'something nice',
      thumbnail: 'Image',
    },
  ],
};

describe('ProductsComponent', () => {
  let component: ProductsComponent;
  let fixture: ComponentFixture<ProductsComponent>;
  let productService: ProductsService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductsComponent, ProductsDisplayComponent],
      imports: [HttpClientTestingModule],
      providers: [ProductsService],
    }).compileComponents();
    fixture = TestBed.createComponent(ProductsComponent);
    component = fixture.componentInstance;
    productService = TestBed.inject(ProductsService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should update current time on initialization', () => {
    component.ngOnInit();
    expect(component.currentTime).toBeDefined();
  });

  it('should fetch products from ProductService on calling getProducts()', () => {
    spyOn(productService, 'getProducts').and.returnValue(of(dummyProducts));

    component.getProducts();
    expect(component.totalProducts).toEqual(dummyProducts.total);
    expect(component.products).toEqual(dummyProducts.products);
  });

  it('should categorize products by category', () => {
    const expectedCategories = [
      {
        category: 'smartphones',
        products: [
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
            description: 'something nice',
            thumbnail: 'Image',
          },
        ],
      },
      {
        category: 'laptops',
        products: [
          {
            id: 2,
            title: 'Product 2',
            stock: 0,
            price: 150,
            discountPercentage: 20,
            rating: 3,
            images: ['image3.jpg', 'image4.jpg'],
            brand: 'Apple',
            category: 'laptops',
            description: 'something nice',
            thumbnail: 'Image',
          },
        ],
      },
    ];

    const categorizedProducts = component.getProductsByCategory(
      dummyProducts.products
    );
    expect(categorizedProducts).toEqual(expectedCategories);
  });
});
