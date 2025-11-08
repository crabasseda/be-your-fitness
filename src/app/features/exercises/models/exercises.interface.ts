export interface Exercise {
  exerciseId: string;
  name: string;
  equipments: string[];
  bodyParts: string[];
  exerciseType: string;
  targetMuscles: string[];
  secondaryMuscles: string[];
  imageUrl: string;
  keywords: string[];
  instructions: string[];
}

interface Metadata {
  currentPage: number;
  nextPage: string;
  previousPage: string;
  totalExercises: number;
  totalPages: number;
}

export interface ExercisesResponse {
  data: Exercise[];
  medatada: Metadata;
  success: boolean;
}

export interface FiltersDataResponse {
  name: string;
  imageUrl: string;
}

export interface FiltersResponse {
  success: boolean;
  data: FiltersDataResponse[];
}
