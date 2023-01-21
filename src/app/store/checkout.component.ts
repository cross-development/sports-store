// Core
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
// Models
import { Order } from '../model/order.model';
// Repositories
import { OrderRepository } from '../model/order.repository';

@Component({
  selector: 'app-checkout',
  moduleId: module.id,
  templateUrl: 'checkout.component.html',
  styleUrls: ['checkout.component.scss'],
})
export class CheckoutComponent {
  public orderSent: boolean = false;
  submitted: boolean = false;

  constructor(
    public readonly order: Order,
    public readonly orderRepository: OrderRepository,
  ) {}

  public submitOrder(form: NgForm): void {
    this.submitted = true;

    if (form.valid) {
      this.orderRepository.saveOrder(this.order).subscribe(order => {
        this.order.clear();
        this.orderSent = true;
        this.submitted = false;
      });
    }
  }
}
