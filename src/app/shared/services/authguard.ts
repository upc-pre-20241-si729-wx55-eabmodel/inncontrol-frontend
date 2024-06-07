import {inject, Injectable} from "@angular/core";
import {IamStorageService} from "./iam-storage.service";
import {ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot} from "@angular/router";

@Injectable()
export class AuthGuardImpl {
  constructor(private _authService: IamStorageService, private _router: Router) {
  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this._authService.isLoggedIn()) {
      return true;
    } else {
      this._router.navigate(['/login'])
      return false
    }
  }

  canLoggedIn(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this._authService.isLoggedIn()) {
      this._router.navigate(['/control'])
      return false;
    } else {
      if (this._authService.hasCredentials()) {
        this._authService.validLogin();
      }
      return true;
    }

  }
}

export const AuthGuard: CanActivateFn = (next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean => {
  return inject(AuthGuardImpl).canActivate(next, state);
}


export const LoggedInAuthGuard: CanActivateFn = (next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean => {
  return inject(AuthGuardImpl).canLoggedIn(next, state);
}
