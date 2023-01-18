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
// Guards
import { StoreGuard } from './store/store.guard';

@NgModule({
  imports: [
    BrowserModule,
    StoreModule,
    RouterModule.forRoot([
      { path: 'store', component: StoreComponent, canActivate: [StoreGuard] },
      {
        path: 'cart',
        component: CartDetailComponent,
        canActivate: [StoreGuard],
      },
      {
        path: 'checkout',
        component: CheckoutComponent,
        canActivate: [StoreGuard],
      },
      { path: '**', redirectTo: '/store' },
    ]),
  ],
  providers: [StoreGuard],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
