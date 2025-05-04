import { Injectable } from '@angular/core';
import { Category } from '../../types/category.type';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class CategoryService {
  constructor(private httpClient: HttpClient) {}

  getAllCategories(): Observable<Category[]> {
    return this.httpClient.get<Category[]>(
      'http://localhost:5001/productcategories'
    );
  }
}
