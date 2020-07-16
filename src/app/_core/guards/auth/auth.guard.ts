import { Injectable } from '@angular/core'
import { Router, CanActivate, CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router'
import { Observable } from 'rxjs'

import { AuthenticationService } from '_core/authentication/authentication.service'

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild {

  constructor(
    private router: Router,
    private authService: AuthenticationService
  ) {  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.onCheckUser(next, state)
  }
  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.onCheckUser(next, state)
  }

  private onCheckUser(route: any, state: any): boolean {
    const isLogin = this.authService.isLogin()
    if (isLogin) {
      return true
    } else {
      this.router.navigate([''], { queryParams: { returnUrl: state.url } })
      return false
    }
  }
  
}
