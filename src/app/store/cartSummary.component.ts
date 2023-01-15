// Core
import { Component } from '@angular/core';
// Models
import { Cart } from '../model/cart.model';

@Component({
  selector: 'app-cart-summary',
  moduleId: module.id,
  templateUrl: 'cartSummary.component.html',
})
export class CartSummaryComponent {
  constructor(public readonly cart: Cart) {}
}
