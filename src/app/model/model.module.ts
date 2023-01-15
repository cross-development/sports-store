// Core
import { NgModule } from '@angular/core';
// Models
import { Cart } from './cart.model';
import { StaticDataSource } from './static.datasource';
import { ProductRepository } from './product.repository';

@NgModule({
  imports: [],
  exports: [],
  providers: [StaticDataSource, ProductRepository, Cart],
})
export class ModelModule {}
