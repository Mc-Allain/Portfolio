import React, { useState, createContext, useContext, useEffect } from "react";
import DarkModeSwitchToggle from "../components/DarkModeTheme/DarkModeSwitchToggle";
import ConstantValues from "./Constants";

// Values
export const Theme = {
  LIGHT: "LIGHT_THEME",
  DARK: "DARK_THEME",
};

// Created Context from Values
export const LightDarkThemeContext = createContext(Theme);

// Provider
const LightDarkThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(Theme.LIGHT);
  
  useEffect(() => {
    const savedTheme = localStorage.getItem(ConstantValues.localStorageThemeKey);
    if (savedTheme) {
      changeTheme(savedTheme);
    }
  }, []);

  const changeTheme = (selectedTheme) => {
    setTheme(selectedTheme);
    localStorage.setItem(ConstantValues.localStorageThemeKey, selectedTheme);
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


// Default Theme Component
export const LightDarkThemeToggle = () => {
  const { theme, changeTheme } = useContext(LightDarkThemeContext);

  const selectTheme = (selectedTheme) => {
    changeTheme(selectedTheme);
  };
  return (
    <DarkModeSwitchToggle
      onThemeChange={selectTheme}
      initialTheme={theme}
    />
  );
};

// Export Provider as Default
export default LightDarkThemeProvider;
