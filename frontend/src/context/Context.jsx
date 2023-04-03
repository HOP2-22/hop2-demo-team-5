import React, { createContext, useState } from "react";

export const ColorModeContext = createContext();

export function ThemeContext({ children }) {
  const [theme, setTheme] = useState("white");

  const [username, setUsername] = useState("");

  const colorModeHander = () => {
    setTheme((prev) => (prev === "white" ? "black" : "white"));
  };
  return (
    <ColorModeContext.Provider
      value={{
        theme: theme,
        changeTheme: colorModeHander,
        username: username,
        setUsername: setUsername,
      }}
    >
      {children}
    </ColorModeContext.Provider>
  );
}

export default ThemeContext;
