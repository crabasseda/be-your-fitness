import { computed, Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly USER_KEY = 'user';

  private isBrowser(): boolean {
    return typeof window !== 'undefined' && !!window.localStorage;
  }

  public isLoggedIn = computed(() => {
    if (!this.isBrowser()) return false;
    return !!localStorage.getItem(this.USER_KEY);
  });

  login(username: string, password: string): boolean {
    if (username === 'admin' && password === '1234') {
      localStorage.setItem(this.USER_KEY, username);
      return true;
    }
    return false;
  }

  logout() {
    localStorage.removeItem(this.USER_KEY);
  }

  getUser(): string | null {
    return localStorage.getItem(this.USER_KEY);
  }
}
