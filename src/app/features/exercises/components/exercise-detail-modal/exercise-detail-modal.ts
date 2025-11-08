import { Component, input, output } from '@angular/core';
import { ExtendedExercise } from '@features/exercises/models/exercises.interface';
import { Chip } from 'src/app/shared/chip/chip';
import { ChipType } from 'src/app/shared/chip/models/chip.enum';

@Component({
  selector: 'byf-exercise-detail-modal',
  imports: [Chip],
  templateUrl: './exercise-detail-modal.html',
  styleUrl: './exercise-detail-modal.scss',
})
export class ExerciseDetailModal {
  exercise = input.required<ExtendedExercise>();
  close = output<void>();

  ChipType = ChipType;

  onClose() {
    this.close.emit();
  }
}
