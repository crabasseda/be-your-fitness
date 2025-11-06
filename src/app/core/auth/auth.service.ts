import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { catchError, firstValueFrom, throwError } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly USER_KEY = 'user';
  private _http = inject(HttpClient);

  public isLoggedIn = signal<boolean>(false);

  async login(username: string, password: string): Promise<void> {
    try {
      const res: any = await firstValueFrom(
        this._http.post('http://localhost:3000/api/auth/login', { username, password }).pipe(
          catchError((err) => {
            return throwError(() => new Error('Credenciales incorrectas'));
          }),
        ),
      );

      localStorage.setItem('token', res.token);
      this.isLoggedIn.set(true);
    } catch (err) {
      throw err;
    }
  }
  logout() {
    this.isLoggedIn.set(false);
    localStorage.removeItem('token');
  }

  getUser(): string | null {
    return localStorage.getItem(this.USER_KEY);
  }
}
