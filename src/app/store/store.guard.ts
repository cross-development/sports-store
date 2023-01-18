// Core
import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot } from '@angular/router';
// Components
import { StoreComponent } from './store.component';

@Injectable()
export class StoreGuard implements CanActivate {
  private firstNavigate = true;

  constructor(private readonly router: Router) {}

  canActivate(route: ActivatedRouteSnapshot): boolean {
    if (this.firstNavigate) {
      this.firstNavigate = false;

      if (route.component !== StoreComponent) {
        this.router.navigateByUrl('/');
        return false;
      }
    }

    return true;
  }
}
