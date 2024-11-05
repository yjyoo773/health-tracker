import React, { createContext, useReducer, useContext, ReactNode } from "react";
import { AppAction, AppState } from "../types/AppState";
import { appReducer } from "./AppReducer";

const initialState: AppState = {
  medications: [],
  hydration: {
    targetOunces: 64,
    currentOunces: 0,
  }
}

const AppContext= createContext<{
  state: AppState;
  dispatch: React.Dispatch<AppAction>
}>({
  state: initialState,
  dispatch: () => undefined,
})

export const AppProvider: React.FC<{children: ReactNode}> = ({children}) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  return (
    <AppContext.Provider value={{state, dispatch}}>
      {children}
    </AppContext.Provider>
  )
}

export const useAppContext = () => useContext(AppContext);