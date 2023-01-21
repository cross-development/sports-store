// Core
import { Injectable } from '@angular/core';
// Models
import { Product } from './product.model';
// Data Sources
import { StaticDataSource } from './static.datasource';

@Injectable()
export class ProductRepository {
  private products: Product[] = [];
  private categories: (string | null)[] = [];

  constructor(private readonly dataSource: StaticDataSource) {
    dataSource.getProducts().subscribe(data => {
      this.products = data;
      this.categories = data
        .map(product => product.category)
        .filter((category, index, array) => array.indexOf(category) === index)
        .sort();
    });
  }

  public getProducts(category: string | null): Product[] {
    return this.products.filter(
      product => category === null || category === product.category,
    );
  }

  public getProduct(id: number): Product | undefined {
    return this.products.find(product => product.id === id);
  }

  public getCategories(): (string | null)[] {
    return this.categories;
  }
}
