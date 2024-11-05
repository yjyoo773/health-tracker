import React from 'react';
import { AppProvider } from './contexts/AppContext';
import { MedicationTracker } from './components/MedicationTracker';
import { HydrationTracker } from './components/HydrationTracker';

function App() {
  return (
    <AppProvider>
      <div>
        <MedicationTracker/>
        <HydrationTracker/>
      </div>
    </AppProvider>
  );
}

export default App;
