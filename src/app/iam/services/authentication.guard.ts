import {ActivatedRouteSnapshot, CanActivateFn, Router} from "@angular/router";
import {inject} from "@angular/core";
import {AuthenticationService} from "./authentication.service";
import {map, take} from "rxjs";

export const authenticationGuard: CanActivateFn = (route: ActivatedRouteSnapshot) => {
  const authenticationService = inject(AuthenticationService);
  const router = inject(Router);
  return authenticationService.isSignedIn.pipe(
    take(1), map(isSignedIn => {
      if (isSignedIn) {
        // console.log('Signed in, allowing access');
        return true;
      } else {
        // console.log('Not signed in, redirecting to login');
        authenticationService.retrieveSession().then((logged) => {
          if (!logged) {
            router.navigate(['/login']).then();
          } else {
            const routeToNavigateFullPath = route.routeConfig?.path;
            console.log('routeToNavigateFullPath', routeToNavigateFullPath);
            if (routeToNavigateFullPath) {
              router.navigate([routeToNavigateFullPath]).then();
            } else {
              router.navigate(['/']).then();
            }
          }
          // router.navigate(['/login']).then();
        });
        // router.navigate(['/login']).then();
        return false;
      }
    })
  );
};


export const loginGuard: CanActivateFn = (route: ActivatedRouteSnapshot) => {
  const authenticationService = inject(AuthenticationService);
  const router = inject(Router);
  return authenticationService.isSignedIn.pipe(
    take(1), map(isSignedIn => {
        if (isSignedIn) {
          // console.log('Already signed in, redirecting to home');
          router.navigate(['/']).then();
          return false;
        } else {
          // console.log('Not signed in, allowing access');
          authenticationService.retrieveSession().then((logged) => {
            if (logged) {
              router.navigate(['/']).then();
            } else {
              const routeToNavigateFullPath = route.routeConfig?.path;
              console.log('routeToNavigateFullPath', routeToNavigateFullPath);
              if (routeToNavigateFullPath) {
                router.navigate([routeToNavigateFullPath]).then();
              } else {
                router.navigate(['/']).then();
              }
            }
          });
          return true;
        }
      }
    )
  );
}
