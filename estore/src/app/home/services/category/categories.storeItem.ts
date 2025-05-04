import { StoreItem } from 'src/app/shared/storeItem';
import { Category } from '../../types/category.type';
import { CategoryService } from './category.service';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable()
export class CategoriesStoreItem extends StoreItem<Category[]> {
  constructor(private categoryService: CategoryService) {
    super([]);
  }

  async loadCategories() {
    this.categoryService.getAllCategories().subscribe((categories) => {
      this.setValue(categories);
    });
  }

  get categories$(): Observable<Category[]> {
    return this.value$;
  }

  get topLevelCategories$(): Observable<Category[]> {
    return this.value$.pipe(
      map((categories) =>
        categories.filter((category) => category.parent_category_id === null)
      )
    );
  }
}
