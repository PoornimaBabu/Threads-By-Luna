import { Component, inject } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { Category } from '../types/category';
import { CategoryService } from '../services/category.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-side-navbar',
  imports: [FontAwesomeModule, CommonModule],
  templateUrl: './side-navbar.html',
  styleUrl: './side-navbar.css',
})
export class SideNavbar {
  faAngleDown = faAngleDown;
  categories: Category[] = [];

  constructor(categoryService: CategoryService){
    this.categories = categoryService.getCategories();
  }

  getCategory(categoryId?: number): Category[] {
    return this.categories.filter(cat => cat.parent_category_id === categoryId);
  }

}
