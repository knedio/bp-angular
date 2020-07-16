import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map, tap, debounce } from 'rxjs/operators';
import { of as observableOf } from 'rxjs';

import { AuthStorage } from '_shared/models/auth//auth-storage/auth-storage.model'

import { LoginForm } from '_shared/models/form/login-form/login-form.model'

const storageKey = '_auth'
const prefix = 'auth'

@Injectable()
export class AuthenticationService {
    constructor(private http: HttpClient) {
    }

    login(data: LoginForm): Observable<any> {
        return this.http.post<any>(`${prefix}/login`, data)
        .pipe(
          tap( data => {
            const auth: AuthStorage = {
              token: data.token,
              user: data.user,
              role: data.user.user_role.role.name,
            }
            localStorage.setItem(storageKey, JSON.stringify(auth))
          })
        )
    }

    logout(): Observable<boolean> {
      localStorage.removeItem(storageKey);
      return observableOf(true);
    }

    getUserInfo(): Observable<any> {
      const cred = this.getUser();
      return observableOf(cred);
    }

    isLogin() {
      return localStorage.getItem(storageKey) ? true : false
    }

    getToken() {
      const cred = this.getUser();
      return cred && cred['token'];
    }

    getUserRole(): Observable<any> {
      const cred =  this.getUser();
      return observableOf(cred['role']);
    }

    getUserType() {
      const cred =  this.getUser();
      return this.isLogin() ? cred['role'] : false
    }

    private getUser() {
      const cred = localStorage.getItem(storageKey);
      return JSON.parse( cred );
    }

}

