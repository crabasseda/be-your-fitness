import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from 'src/app/core/auth/auth.service';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, MatInputModule, RouterLink, MatButtonModule],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  private _authService = inject(AuthService);
  private _router = inject(Router);
  private _formBuilder = inject(FormBuilder);

  loginForm!: FormGroup;

  ngOnInit() {
    this._buildForm();
  }

  async onLogin() {
    console.log('login');
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }

    try {
      const user = this.loginForm.value;
      await this._authService.login(user.username, user.password);
      this._router.navigate(['/home']);
    } catch (error) {
      this.loginForm.setErrors({});
    }
  }

  onForgotPassword() {
    //Logic to restart password
  }

  private _buildForm() {
    this.loginForm = this._formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
}
