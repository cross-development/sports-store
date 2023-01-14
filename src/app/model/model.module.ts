// Core
import { NgModule } from '@angular/core';
// Models
import { StaticDataSource } from './static.datasource';
import { ProductRepository } from './product.repository';

@NgModule({
  imports: [],
  exports: [],
  providers: [StaticDataSource, ProductRepository],
})
export class ModelModule {}
