import { Component, inject, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  imports: [RouterModule],
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('be-your-fitness');

  users: string[] = [];

  private _userService = inject(UserService);

  ngOnInit() {
    console.log('ngoninit');
    this._userService.getUsers().subscribe((data) => {
      this.users = data;
      console.log(data);
    });
  }
}
