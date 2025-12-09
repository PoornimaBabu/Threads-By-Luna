import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { faSearch, faUserCircle, faHeart, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { Cart } from '../cart/cart';

@Component({
  selector: 'app-header',
  imports: [FontAwesomeModule, Cart],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  faSearch = faSearch;
  faUserCircle = faUserCircle;
  faHeart = faHeart;
  faShoppingCart = faShoppingCart;
}
