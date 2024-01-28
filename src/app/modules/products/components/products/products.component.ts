import { Component } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { concatMap, timer } from 'rxjs';
import {
  Product,
  ProductWithCategory,
} from '../../../../core/models/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent {
  products: Product[] = [];
  currentTime!: any;
  totalProducts!: number;
  productsByCategory!: ProductWithCategory[];
  appleProducts!: Product[];
  constructor(private productService: ProductsService) {}

  ngOnInit() {
    this.updateTimeAndProducts();

    timer(60000, 60000)
      .pipe(concatMap(async () => this.updateTimeAndProducts()))
      .subscribe();
  }

  updateTimeAndProducts() {
    this.updateTime();
    return this.getProducts();
  }

  updateTime() {
    this.currentTime = new Date();
  }

  refresh() {
    this.updateTime();
    this.getProducts();
  }

  getProducts() {
    this.productService.getProducts().subscribe((data) => {
      this.totalProducts = data.total;
      this.products = data.products;
      this.productsByCategory = this.getProductsByCategory(this.products);
      this.appleProducts = this.getProductsByBrand(this.products, 'Apple');
      console.log(this.productsByCategory);
    });
  }

  getProductsByCategory(products: Product[]): ProductWithCategory[] {
    const categoriesMap = new Map<string, any[]>();
    for (const product of products) {
      const category = product.category;

      if (!categoriesMap.has(category)) {
        categoriesMap.set(category, []);
      }

      categoriesMap.get(category)?.push(product);
    }

    const categories: any[] = [];
    categoriesMap.forEach((products, category) => {
      categories.push({ category: category, products: products });
    });

    return categories;
  }

  getProductsByBrand(products: Product[], brand: string): Product[] {
    let filteredProducts = products.filter(
      (product) => product.brand === brand
    );
    return filteredProducts;
  }
}
