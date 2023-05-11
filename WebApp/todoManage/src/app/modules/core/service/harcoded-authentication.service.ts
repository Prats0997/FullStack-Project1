import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HarcodedAuthenticationService {

  constructor() { }

  authenticateUser(userName: string, password: string): boolean {
    if(userName == 'admin' && password == 'admin'){
      sessionStorage.setItem('loggedin',JSON.stringify(true));
      return true;
    }
    if (sessionStorage.getItem('loggedin')){
      sessionStorage.removeItem('loggedin');
    }
    return false;
  }
}
