import React, { createContext, useState } from 'react';

export const BusContext = createContext();

export const BusProvider = ({ children }) => {
  const [busData, setBusData] = useState([]);

  return (
    <BusContext.Provider value={{ busData, setBusData }}>
      {children}
    </BusContext.Provider>
  );
};
