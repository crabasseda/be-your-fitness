import { Component, input, output } from '@angular/core';
import { ExtendedExercise } from '@features/exercises/models/exercises.interface';

@Component({
  selector: 'byf-exercise-detail-modal',
  imports: [],
  templateUrl: './exercise-detail-modal.html',
  styleUrl: './exercise-detail-modal.scss',
})
export class ExerciseDetailModal {
  exercise = input.required<ExtendedExercise>();
  close = output<void>();

  onClose() {
    this.close.emit();
  }
}
