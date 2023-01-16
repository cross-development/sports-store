// Core
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
// Components
import { AppComponent } from './app.component';
import { StoreComponent } from './store/store.component';
import { CheckoutComponent } from './store/checkout.component';
import { CartDetailComponent } from './store/cartDetail.component';
// Modules
import { StoreModule } from './store/store.module';

@NgModule({
  imports: [
    BrowserModule,
    StoreModule,
    RouterModule.forRoot([
      { path: 'store', component: StoreComponent },
      { path: 'cart', component: CartDetailComponent },
      { path: 'checkout', component: CheckoutComponent },
      { path: '**', redirectTo: '/store' },
    ]),
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
