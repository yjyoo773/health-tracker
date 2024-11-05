import React from "react";
import { useAppContext } from "../contexts/AppContext";

export const HydrationTracker: React.FC = () => {
  const {state, dispatch} = useAppContext();

  const handleAddWater = () => {
    dispatch({type: 'ADD_WATER', payload: { ounces: 8}});
  };

  return (
    <div>
      <h2>Hydration Tracker</h2>
      <p>
        Water Intake: {state.hydration.currentOunces} / {state.hydration.targetOunces}
      </p>
      <button onClick={handleAddWater}>Add 8 oz</button>
    </div>
  )
}