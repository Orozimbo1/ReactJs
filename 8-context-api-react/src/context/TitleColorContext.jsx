// contexto mais complexo
import { createContext, useReducer, useState } from "react";

export const TitleColorContext = createContext();

export const titleColorReducer = (state, action) => {

  switch(action.type) {
    case 'ORIGINAL':
      return {...state, color: '#213547'}
    case 'RED':
      return {...state, color: 'red'}
    case 'BLUE':
      return {...state, color: 'blue'}
    default:
      return state
  }

};

export const TitleColorContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(titleColorReducer, {
    color: "#213547",
  });

  return (
    <TitleColorContext.Provider value={{ ...state, dispatch }}>
      {children}
    </TitleColorContext.Provider>
  );
};