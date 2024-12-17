import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }

  authenticate(username: string, password: string): boolean {
    if (username === "judit" && password === "judit") {
      if (this.isSessionStorageAvailable()) {
        sessionStorage.setItem("authenticatedUser", username);
      }
      return true;
    } else {
      return false;
    }
  }

  getUser(): any {
    if (this.isSessionStorageAvailable()) {
      let user = sessionStorage.getItem('authenticatedUser');
      return user;
    }
    return null;
  }
  
  isUserLoggedIn(): boolean {
    if (this.isSessionStorageAvailable()) {
      let user = sessionStorage.getItem('authenticatedUser');
      return !(user === null);
    }
    return false;
  }

  logout(): void {
    if (this.isSessionStorageAvailable()) {
      sessionStorage.removeItem("authenticatedUser");
    }
  }

  private isSessionStorageAvailable(): boolean {
    try {
      return typeof window !== 'undefined' && typeof window.sessionStorage !== 'undefined';
    } catch (e) {
      console.error('SessionStorage is not available:', e);
      return false;
    }
  }
}
