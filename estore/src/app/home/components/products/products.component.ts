import { Component } from '@angular/core';
import { ProductsStoreItem } from '../../services/product/products.storeItem';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Product } from '../../types/products.type';
import { CartStoreItem } from '../../services/cart/cart.storeItem';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent {
  faShoppingCart = faShoppingCart;

  constructor(
    public productsStore: ProductsStoreItem,
    private cart: CartStoreItem
  ) {}

  addToCart(product: Product) {
    this.cart.addProduct(product);
  }
}
