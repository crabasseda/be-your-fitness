import { Component, input, output } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';

@Component({
  selector: 'byf-card',
  imports: [MatCardModule, MatChipsModule],
  templateUrl: './card.html',
  styleUrl: './card.scss',
})
export class Card {
  image = input<string>();
  title = input<string>();
  subtitle = input<string>();
  chips = input<string[]>();

  clicked = output<void>();

  onClick() {
    this.clicked.emit();
  }
}
