/** @format */

import React, { createContext, useContext, useReducer } from "react";

// Prepares the datalayer
export const StateContext = createContext();

// Wrap our app and provide the Data layer
const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

export default StateProvider;
// Push and pull information from the data layer
export const useStateValue = () => useContext(StateContext);
