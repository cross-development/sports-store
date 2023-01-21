// Core
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
// Models
import { Cart } from './cart.model';
import { Order } from './order.model';
// Data Sources
import { RestDataSource } from './rest.datasource';
import { StaticDataSource } from './static.datasource';
// Repositories
import { OrderRepository } from './order.repository';
import { ProductRepository } from './product.repository';

@NgModule({
  imports: [HttpClientModule],
  exports: [],
  providers: [
    Cart,
    Order,
    OrderRepository,
    ProductRepository,
    { provide: StaticDataSource, useClass: RestDataSource },
  ],
})
export class ModelModule {}
