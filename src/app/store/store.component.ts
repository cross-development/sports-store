// Core
import { Component } from '@angular/core';
// Models
import { Product } from '../model/product.model';
import { ProductRepository } from '../model/product.repository';

@Component({
  selector: 'app-store',
  moduleId: module.id,
  templateUrl: './store.component.html',
})
export class StoreComponent {
  public selectedCategory: string | null = null;
  public productPerPage: number = 4;
  public selectedPage: number = 1;

  constructor(private readonly productRepository: ProductRepository) {}

  public get products(): Product[] {
    const pageIndex = (this.selectedPage - 1) * this.productPerPage;

    return this.productRepository
      .getProducts(this.selectedCategory)
      .slice(pageIndex, pageIndex + this.productPerPage);
  }

  public get categories(): (string | null)[] {
    return this.productRepository.getCategories();
  }

  public changeCategory(newCategory: string | null = null): void {
    this.selectedCategory = newCategory;
  }

  public changePage(newPage: number): void {
    this.selectedPage = newPage;
  }

  public changePageSize(event: Event): void {
    const newSize = (event.target as HTMLSelectElement).value;

    this.productPerPage = Number(newSize);
    this.changePage(1);
  }

  public get pageNumbers(): number[] {
    return Array(
      Math.ceil(
        this.productRepository.getProducts(this.selectedCategory).length /
          this.productPerPage,
      ),
    )
      .fill(0)
      .map((_, i) => i + 1);
  }
}