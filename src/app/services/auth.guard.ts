import { Injectable, Injector } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { BasePage } from '../pages/base-page/base-page';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard extends BasePage implements CanActivate {
  constructor(injector: Injector) {
    super(injector);
  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {

    let token = localStorage.getItem('token');
    if (!token) {
      this.nav.push('pages/login');
      return false;
    } else {
      return true;
    }
  }

}
