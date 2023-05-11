import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HarcodedAuthenticationService {
  private _isAuthenticated: boolean = false;
  constructor() {}

  authenticateUser(userName: string, password: string): boolean {
    if (userName == 'admin' && password == 'admin') {
      sessionStorage.setItem('loggedin', JSON.stringify(true));
      this._isAuthenticated = true;
    }
    if (sessionStorage.getItem('loggedin')) {
      sessionStorage.removeItem('loggedin');
    }
    return this._isAuthenticated;
  }

  public get isAuthenticated() {
    return this._isAuthenticated;
  }
}
