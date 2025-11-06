import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { UrlKey } from '@models/url';
import { AuthService } from 'src/app/core/auth/auth.service';

@Component({
  selector: 'byf-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  private _authService = inject(AuthService);
  private _router = inject(Router);

  public isLoggedIn = this._authService.isLoggedIn;

  logout() {
    this._authService.logout();
    this._router.navigateByUrl(UrlKey.Login);
  }
}
