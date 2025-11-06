import { Component, inject, signal } from '@angular/core';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { filter } from 'rxjs';
import { UserService } from './services/user.service';
import { Footer } from './shared/footer/footer';
import { Header } from './shared/header/header';

@Component({
  selector: 'app-root',
  imports: [RouterModule, Header, Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('be-your-fitness');

  private _router = inject(Router);
  public showLayout: boolean = true;

  users: string[] = [];

  private _userService = inject(UserService);

  constructor() {
    this._router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        // Oculta header/footer en rutas específicas
        const noLayoutRoutes = ['/login', '/register'];
        this.showLayout = !noLayoutRoutes.includes(event.urlAfterRedirects);
      });
  }

  // ngOnInit() {
  //   console.log('ngoninit');
  //   this._userService.getUsers().subscribe((data) => {
  //     this.users = data;
  //     console.log(data);
  //   });
  // }
}
