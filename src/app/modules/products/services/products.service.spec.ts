import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { ProductsService } from './products.service';

describe('ProductsService', () => {
  let service: ProductsService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ProductsService],
    });
    service = TestBed.inject(ProductsService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should retrieve products from the API via GET', () => {
    const dummyProducts = [
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
        thumbnail: 'image',
        description: 'something nice',
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
        thumbnail: 'image',
        description: 'checkout the product',
      },
    ];

    service.getProducts().subscribe((products) => {
      expect(products).toEqual(dummyProducts);
    });

    const req = httpTestingController.expectOne(
      'https://dummyjson.com/products?limit=500'
    );
    expect(req.request.method).toBe('GET');
    req.flush(dummyProducts);
  });
});
