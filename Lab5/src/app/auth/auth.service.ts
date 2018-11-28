import { Injectable } from '@angular/core';
//import { AUTH_CONFIG } from './auth0-variables';
import { Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import * as auth0 from 'auth0-js';

(window as any).global = window;

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  auth0 = new auth0.WebAuth({
  clientID: '6VK0xLvbFX6HXnJu3fBU6JosMIsEssAF',
  domain: 'emmanuel96.auth0.com',
  responseType: 'token id_token',
  redirectUri: 'http://localhost:3000/callback',
  scope: 'openid'
});

constructor(public router: Router) {}
public login(): void {
  this.auth0.authorize();
}
public handleAuthentication(): void {
  this.auth0.parseHash((err, authResult) => {
    if (authResult && authResult.accessToken && authResult.idToken) {
      window.location.hash = '';
      this.setSession(authResult);
      this.router.navigate(['/home']);
    } else if (err) {
      this.router.navigate(['/home']);
      console.log(err);
    }
  });
}

private setSession(authResult): void {
  // Set the time that the Access Token will expire at
  const expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
  localStorage.setItem('access_token', authResult.accessToken);
  localStorage.setItem('id_token', authResult.idToken);
  localStorage.setItem('expires_at', expiresAt);
}

public logout(): void {
  // Remove tokens and expiry time from localStorage
  localStorage.removeItem('access_token');
  localStorage.removeItem('id_token');
  localStorage.removeItem('expires_at');
  // Go back to the home route
  this.router.navigate(['/']);
}

public isAuthenticated(): boolean {
  // Check whether the current time is past the
  // Access Token's expiry time
  const expiresAt = JSON.parse(localStorage.getItem('expires_at') || '{}');
  return new Date().getTime() < expiresAt;
}

}


