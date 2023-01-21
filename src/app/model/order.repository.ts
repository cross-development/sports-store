// Core
import { Injectable } from '@angular/core';
// Packages
import { Observable } from 'rxjs';
// Models
import { Order } from './order.model';
// Data Sources
import { StaticDataSource } from './static.datasource';

@Injectable()
export class OrderRepository {
  private orders: Order[] = [];

  constructor(private readonly dataSource: StaticDataSource) {}

  public getOrders(): Order[] {
    return this.orders;
  }

  public saveOrder(order: Order): Observable<Order> {
    return this.dataSource.saveOrder(order);
  }
}
