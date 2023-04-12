import React, { createContext, useState, useEffect, Children } from "react";

export const Context = createContext({});

export function Provider({ children }) {
  const [room, setRoom] = useState(null);

  return (
    <Context.Provider value={{ room, setRoom }}>{children}</Context.Provider>
  );
}
