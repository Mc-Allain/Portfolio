import classNames from "classnames";
import React, { useContext } from "react";
import { LightDarkThemeContext, Theme } from "../../providers/LightDarkTheme";

const AppHeader = ({ children }) => {
  const { theme } = useContext(LightDarkThemeContext);

  return (
    <div className="grow w-full flex justify-center overflow-y-scroll">
      <div className={classNames('min-h-full h-fit max-w-[800px]', {
        'bg-white text-black': theme === Theme.LIGHT,
        'bg-gray-800 text-white': theme === Theme.DARK,
      })}>{children}</div>
    </div>
  );
};

export default AppHeader;
