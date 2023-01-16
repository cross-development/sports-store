// Core
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
// Components
import { StoreComponent } from './store.component';
import { CheckoutComponent } from './checkout.component';
import { CartDetailComponent } from './cartDetail.component';
import { CartSummaryComponent } from './cartSummary.component';
// Modules
import { ModelModule } from '../model/model.module';
// Directives
import { CounterDirective } from './counter.directive';

@NgModule({
  imports: [ModelModule, BrowserModule, FormsModule, RouterModule],
  declarations: [
    StoreComponent,
    CounterDirective,
    CartSummaryComponent,
    CheckoutComponent,
    CartDetailComponent,
  ],
  exports: [StoreComponent, CartDetailComponent, CheckoutComponent],
})
export class StoreModule {}
