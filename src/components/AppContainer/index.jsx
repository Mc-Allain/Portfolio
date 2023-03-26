import React, { useContext } from "react";
import { LightDarkThemeContext } from "../../providers/LightDarkTheme";

const AppContainer = ({ children }) => {
  const { theme } = useContext(LightDarkThemeContext);

  return <div className="bg-gray-200 h-screen flex flex-col">{children}</div>;
};

export default AppContainer;
