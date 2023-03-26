import React, { useContext } from "react";
import { LightDarkThemeContext } from "../../providers/LightDarkTheme";
import classNames from 'classnames';
import { Theme } from "../DarkModeSwitchToggle";

const AppContainer = ({ children }) => {
  const { theme } = useContext(LightDarkThemeContext);

  return <div className={classNames('h-screen flex flex-col' , {
    'bg-gray-200': theme === Theme.LIGHT,
    'bg-gray-700': theme === Theme.DARK,
  })}>{children}</div>;
};

export default AppContainer;
