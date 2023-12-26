import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HardcodedAuthService {
  constructor() {}

  authenticate(username: string, password: string): boolean {
    // console.log(this.isUserLoggedIn());
    if (username === 'mayank' && password === '1214') {
      sessionStorage.setItem('authenticateUser', username);
      // console.log(this.isUserLoggedIn());
      return true;
    }

    return false;
  }

  isUserLoggedIn(): boolean {
    let user = sessionStorage.getItem('authenticateUser');
    return user !== null;
  }

  logout(): void {
    sessionStorage.removeItem('authenticateUser');
  }
}
