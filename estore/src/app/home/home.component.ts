import { Component } from '@angular/core';
import { CategoriesStoreItem } from './services/category/categories.storeItem';
import { ProductsStoreItem } from './services/product/products.storeItem';
import { SearchKeyword } from './types/searchKeyword.type';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  constructor(
    private categoriesStoreItem: CategoriesStoreItem,
    private productsStoreItem: ProductsStoreItem,
    private router: Router
  ) {
    this.categoriesStoreItem.loadCategories();
    this.productsStoreItem.loadProducts();
    router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event) => {
        if ((event as NavigationEnd).url === '/home') {
          router.navigate(['/home/products']);
        }
      });
  }

  onSelectCategory(categoryId: number): void {
    this.productsStoreItem.loadProducts('maincategoryid=' + categoryId);
  }

  onSearchKeyword(searchKeyword: SearchKeyword): void {
    this.productsStoreItem.loadProducts(
      'maincategoryid=' +
        searchKeyword.categoryId +
        '&keyword=' +
        searchKeyword.keyword
    );
  }
}
