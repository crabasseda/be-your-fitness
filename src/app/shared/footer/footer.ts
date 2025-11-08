import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { UrlKey } from '@models/url';

@Component({
  selector: 'byf-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  private _router = inject(Router);

  goExercisesPage() {
    this._router.navigateByUrl(UrlKey.Exercises);
  }
}
