import {CanActivateFn, Router} from "@angular/router";
import {inject} from "@angular/core";
import {AuthenticationService} from "./authentication.service";
import {map, take} from "rxjs";

export const authenticationGuard: CanActivateFn = () => {
  const authenticationService = inject(AuthenticationService);
  const router = inject(Router);
  return authenticationService.isSignedIn.pipe(
    take(1), map(isSignedIn => {
      if (isSignedIn) {
        console.log('Signed in, allowing access');
        return true;
      } else {
        console.log('Not signed in, redirecting to login');
        router.navigate(['/login']).then();
        return false;
      }
    })
  );
};


export const loginGuard: CanActivateFn = () => {
  const authenticationService = inject(AuthenticationService);
  const router = inject(Router);
  return authenticationService.isSignedIn.pipe(
    take(1), map(isSignedIn => {
      if (isSignedIn) {
        console.log('Already signed in, redirecting to home');
        router.navigate(['/']).then();
        return false;
      } else {
        console.log('Not signed in, allowing access');
        return true;
      }
    })
  );
}
