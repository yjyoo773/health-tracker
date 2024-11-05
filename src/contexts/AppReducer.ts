import { AppAction, AppState } from "../types/AppState";

export const appReducer = (state: AppState, action: AppAction): AppState => {
  switch (action.type){
    case 'ADD_MEDICATION':
      return { ...state, medications: [...state.medications, action.payload]};
    case 'TAKE_MEDICATION':
      return {
        ...state,
        medications: state.medications.map((med) => 
          med.id === action.payload.medicationId
            ? {
                ...med,
                takenToday: med.takenToday.map((taken, i) =>
                  i === action.payload.index ? true : taken
                )
            }
            : med
        )
      };
    case 'SET_HYDRATION_GOAL':
      return {
        ...state,
        hydration: { ...state.hydration, targetOunces: action.payload},
      };
    case "ADD_WATER":
      return {
        ...state,
        hydration: {
          ...state.hydration,
          currentOunces: state.hydration.currentOunces + action.payload.ounces
        }
      }
    default:
      return state;
  }
}