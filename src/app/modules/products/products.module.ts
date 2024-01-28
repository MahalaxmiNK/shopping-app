import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpClientModule } from '@angular/common/http';
import { CategoryFormatPipe } from '../../shared/pipes/category-format.pipe';
import { ProductsComponent } from './components/products/products.component';
import { ProductsDisplayComponent } from './components/products-display/products-display.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    CategoryFormatPipe,
    ProductsComponent,
    ProductsDisplayComponent,
  ],
  imports: [CommonModule, HttpClientModule, SharedModule],
  exports: [ProductsComponent, ProductsDisplayComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ProductsModule {}
