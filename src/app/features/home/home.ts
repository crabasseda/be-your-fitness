import { Component } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-home',
  imports: [MatSlideToggleModule],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {}
