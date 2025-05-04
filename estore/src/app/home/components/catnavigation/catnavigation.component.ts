import { Component, EventEmitter, Output } from '@angular/core';
import { CategoriesStoreItem } from '../../services/category/categories.storeItem';
import { Category } from '../../types/category.type';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-catnavigation',
  templateUrl: './catnavigation.component.html',
  styleUrls: ['./catnavigation.component.scss'],
})
export class CatnavigationComponent {
  @Output()
  categoryClicked: EventEmitter<number> = new EventEmitter<number>();

  displayOptions: boolean = true;

  constructor(
    public categoryStore: CategoriesStoreItem,
    private router: Router
  ) {
    router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event) => {
        this.displayOptions = (event as NavigationEnd).url === '/home/products' ? true : false;
      });
  }

  onCategoryClick(category: Category): void {
    this.categoryClicked.emit(category.id);
  }
}
