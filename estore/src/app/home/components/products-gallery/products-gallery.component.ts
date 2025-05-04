import { Component } from '@angular/core';
import { ProductsStoreItem } from '../../services/product/products.storeItem';

@Component({
  selector: 'app-products-gallery',
  templateUrl: './products-gallery.component.html',
  styleUrls: ['./products-gallery.component.scss'],
})
export class ProductsGalleryComponent {
  constructor(private productsStoreItem: ProductsStoreItem) {}

  onSelectSubCategory(subCategoryId: number): void {
    this.productsStoreItem.loadProducts('subcategoryid=' + subCategoryId);
  }
}
