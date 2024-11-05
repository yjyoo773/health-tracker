export interface Medication {
  id: string;
  name: string;
  dose: string;
  timesPerDay: number;
  takenToday: boolean[];
}

export interface Hydration {
  targetOunces: number;
  currentOunces: number;
}

export interface AppState {
  medications: Medication[];
  hydration: Hydration;
}

export type AppAction =
  | { type: 'ADD_MEDICATION'; payload: Medication}
  | { type: 'TAKE_MEDICATION'; payload: { medicationId: string; index: number}}
  | { type: 'SET_HYDRATION_GOAL'; payload: number}
  | { type: 'ADD_WATER'; payload: { ounces: number}}