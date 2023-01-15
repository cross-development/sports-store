// Core
import { Injectable } from '@angular/core';
// Models
import { Product } from './product.model';

@Injectable()
export class Cart {
  public lines: CartLine[] = [];
  public itemCount: number = 0;
  public cartPrice: number = 0;

  public addLine(product: Product, quantity: number = 1): void {
    const line = this.lines.find(line => line.product.id === product.id);

    if (line) {
      line.quantity += quantity;
    } else {
      this.lines.push(new CartLine(product, quantity));
    }

    this.recalculate();
  }

  public updateQuantity(product: Product, quantity: number): void {
    const line = this.lines.find(line => line.product.id === product.id);

    if (line) {
      line.quantity = Number(quantity);
    }
  }

  public removeLine(id: number): void {
    const index = this.lines.findIndex(line => line.product.id === id);

    this.lines.splice(index);

    this.recalculate();
  }

  public clear(): void {
    this.lines = [];
    this.itemCount = 0;
    this.cartPrice = 0;
  }

  private recalculate(): void {
    this.itemCount = 0;
    this.cartPrice = 0;
    this.lines.forEach(line => {
      this.itemCount += line.quantity;
      this.cartPrice += line.quantity * line.product.price;
    });
  }
}

export class CartLine {
  constructor(public product: Product, public quantity: number) {}

  public get lineTotal(): number {
    return this.quantity * this.product.price;
  }
}
