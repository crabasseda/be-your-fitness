import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UserService {
  private apiUrl = 'http://localhost:3000/users/6901d070334f1fa2d1de8d9b';
  private _http = inject(HttpClient);
  getUsers(): Observable<string[]> {
    return this._http.get<string[]>(this.apiUrl);
  }
}
