import { Component } from '@angular/core';
import { CategoryService } from '../services/category.service';
import { Category } from '../types/category';

@Component({
  selector: 'app-cat-navigation',
  imports: [],
  templateUrl: './cat-navigation.html',
  styleUrl: './cat-navigation.css',
})
export class CatNavigation {
  categories: Category[] = [];

  constructor(categoryService: CategoryService){
   categoryService.getCategories().subscribe(categories => this.categories = categories.filter(category => category.parent_category_id === null));
  }
}
