import { Component } from '@angular/core';
import { ProductService } from './service/product-service';
import { Product } from './product.type';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  imports: [CommonModule],
  templateUrl: './products.html',
  styleUrl: './products.css',
  providers: [ProductService]
})
export class Products {
  allProducts: Product[] = [];

  constructor(productService: ProductService){
    this.allProducts = productService.getAllProducts();
  }
}
