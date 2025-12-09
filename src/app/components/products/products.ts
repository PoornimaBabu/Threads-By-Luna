import { Component, inject } from '@angular/core';
import { ProductService } from './service/product-service';
import { Product } from './product.type';
import { CommonModule } from '@angular/common';
import { CartState } from '../../state/cart.state';
import { Select, Store } from '@ngxs/store';
import { AddItemToCart } from '../../action/cart.action';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-products',
  imports: [CommonModule],
  templateUrl: './products.html',
  styleUrl: './products.css',
  providers: [ProductService]
})
export class Products {
  allProducts: Product[] = [];
  cartTotal$: Observable<number> = inject(Store).select(CartState.cartTotal);

  constructor(productService: ProductService, private store: Store){
    this.allProducts = productService.getAllProducts();
  }

  addItem(product: Product){
    const action = new AddItemToCart(product);

    this.store.dispatch(action).subscribe((cart) => {
      console.log("Cart updated", cart);
      this.cartTotal$?.subscribe(value => console.log('cart value - ', value));
    })
  }
}
