import { Injectable } from '@angular/core';
import { Product } from '../product.type';
import { products } from '../product.data';

@Injectable()
export class ProductService {

  getAllProducts(): Product[] {
    return products;
  }

}
