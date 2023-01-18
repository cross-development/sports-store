// Core
import { Component } from '@angular/core';
// Models
import { Cart } from '../model/cart.model';

@Component({
  selector: 'app-cart-detail',
  moduleId: module.id,
  templateUrl: 'cartDetail.component.html',
})
export class CartDetailComponent {
  constructor(public readonly cart: Cart) {}
}
