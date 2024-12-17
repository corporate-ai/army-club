import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { API_URL } from '../app.constants';

export const TOKEN = 'token';
export const AUTHETICATED_USER = 'authenticatedUser'

@Injectable({
  providedIn: 'root'
})
export class BasicAuthenticationService {



  constructor(private http: HttpClient) { }
  username!: string;
  token!: string;

  basicAuthenticate(username: string, password: string) {

    const basicAuthHeaderString = "Basic " + window.btoa(username + ':' + password);
    const headers = new HttpHeaders({
      Authorization: basicAuthHeaderString
    });



    return this.http.get<AuthenticationBean>(`${API_URL}/basicauth`, { headers }).pipe(
      map(data => {

        if (this.isSessionStorageAvailable()) {
          sessionStorage.setItem(AUTHETICATED_USER, username);
          sessionStorage.setItem(TOKEN, basicAuthHeaderString);
        }

        return data;
      })
    );

  }


  isUserLoggedIn(): boolean {
    if (this.isSessionStorageAvailable()) {
      let user = sessionStorage.getItem(AUTHETICATED_USER);
      return !(user === null);
    }
    return false;
  }


  getUser(): any {
    if (this.isSessionStorageAvailable()) {
      let user = sessionStorage.getItem(AUTHETICATED_USER);
      return user;
    }
    return null;
  }

  getToken(): any {
    if (this.isSessionStorageAvailable()) {
      let token = sessionStorage.getItem(TOKEN);
      return token;
    }
    return null;
  }

  logout(): void {
    if (this.isSessionStorageAvailable()) {
      sessionStorage.removeItem(TOKEN)
      sessionStorage.removeItem(AUTHETICATED_USER);
    }
  }

  public isSessionStorageAvailable(): boolean {
    try {
      return typeof window !== 'undefined' && typeof window.sessionStorage !== 'undefined';
    } catch (e) {
      console.error('SessionStorage is not available:', e);
      return false;
    }
  }
}

export class AuthenticationBean {


  constructor(
    public message: string) {

  }
}