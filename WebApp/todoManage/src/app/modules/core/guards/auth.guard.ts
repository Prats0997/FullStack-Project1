import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { HarcodedAuthenticationService } from '../service/harcoded-authentication.service';
// import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private harcodedAuthenticationService: HarcodedAuthenticationService
  ) {}
  canActivate() {
    if (!this.harcodedAuthenticationService.loggedinSession()) {
      this.router.navigate(['accounts']);
    }
    return this.harcodedAuthenticationService.loggedinSession();
  }
}
