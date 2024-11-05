import React from "react";
import { useAppContext } from "../contexts/AppContext";

export const MedicationTracker: React.FC = () => {
  const {state, dispatch} = useAppContext();

  const handleTakeMedication = (medicationId: string, index: number) => {
    dispatch({type: 'TAKE_MEDICATION', payload: {medicationId, index}});
  };

  return (
    <div>
      <h2>Medication Tracker</h2>
      {state.medications.map((med) => (
        <div key={med.id}>
          {med.takenToday.map((taken, index) => (
            <input 
              key={index}
              type="checkbox"
              checked={taken}
              onChange={() => handleTakeMedication(med.id,index)}
            />
          ))}
        </div>
      ))}
    </div>
  )
}