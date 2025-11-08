import { Component, input } from '@angular/core';
import { ChipType } from './models/chip.enum';

@Component({
  selector: 'byf-chip',
  imports: [],
  templateUrl: './chip.html',
  styleUrl: './chip.scss',
})
export class Chip {
  text = input.required<string>();
  chipType = input.required<ChipType>();

  ChipType = ChipType;
}
