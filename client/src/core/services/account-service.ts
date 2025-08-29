import { HttpClient } from '@angular/common/http';
import { Injectable, inject, signal } from '@angular/core';
import { LoginCreds, RegisterCreds, User } from '../../types/user';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  private http = inject(HttpClient);
  currentUser = signal<User | null>(null);
  baseUrl = 'https://localhost:5001/api/account/';

  register(creds: RegisterCreds) {
    return this.http
      .post<User>(this.baseUrl + 'register', creds)
      .pipe(tap((user) => {
         if (user) {
          this.setUserLocal(user)
        }
      }));
  }

  login(creds: LoginCreds) {
    return this.http.post<User>(this.baseUrl + 'login', creds).pipe(
      tap((user) => {
        if (user) {
          this.setUserLocal(user)
        }
      })
    );
  }

  setUserLocal(user: User) {
    localStorage.setItem('user', JSON.stringify(user));
    this.currentUser.set(user);
  }
  logout() {
    localStorage.removeItem('user');
    this.currentUser.set(null);
  }
}
