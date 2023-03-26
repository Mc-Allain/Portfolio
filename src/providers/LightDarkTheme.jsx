import React, { useState, createContext } from "react";
import DarkModeSwitchToggle, { Theme } from "../components/DarkModeSwitchToggle";

export const LightDarkThemeToggle = ({
  onThemeChange = () => {},
  initialTheme = Theme.LIGHT,
}) => {
  return (
    <DarkModeSwitchToggle
      onThemeChange={onThemeChange}
      initialTheme={initialTheme}
    />
  );
};

// Created Context from Values
export const LightDarkThemeContext = createContext(Theme);

// Provider
const LightDarkThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(Theme.DARK);

  const changeTheme = (selectedTheme) => {
    setTheme(selectedTheme);
  }

  const value = {
    theme,
    changeTheme,
  };

  return (
    <LightDarkThemeContext.Provider value={value}>
      {children}
    </LightDarkThemeContext.Provider>
  );
};

// Export Provider as Default
export default LightDarkThemeProvider;