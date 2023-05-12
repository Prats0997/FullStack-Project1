import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HarcodedAuthenticationService {
  constructor() {}

  authenticateUser(userName: string, password: string): boolean {
    if (userName == 'admin' && password == 'admin') {
      sessionStorage.setItem('loggedin', JSON.stringify(true));
      return true;
    } else {
      this.removeSessionToLogOut();
    }
    return false;
  }

  loggedinSession(): boolean {
    return sessionStorage.getItem('loggedin') ? true : false;
  }

  public removeSessionToLogOut(): void {
    if (sessionStorage.getItem('loggedin')) {
      sessionStorage.removeItem('loggedin');
    }
  }
}
