// Core
import { Injectable } from '@angular/core';
// Models
import { Cart } from './cart.model';

@Injectable()
export class Order {
  public id: number | null = null;
  public name: string | null = null;
  public address: string | null = null;
  public city: string | null = null;
  public state: string | null = null;
  public zip: string | null = null;
  public country: string | null = null;
  public shipped: boolean = false;

  constructor(public readonly cart: Cart) {}

  clear() {
    this.id = null;
    this.name = null;
    this.address = null;
    this.city = null;
    this.state = null;
    this.zip = null;
    this.country = null;
    this.shipped = false;

    this.cart.clear();
  }
}
