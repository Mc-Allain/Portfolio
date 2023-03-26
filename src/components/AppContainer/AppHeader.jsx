import React, { useContext } from "react";
import { LightDarkThemeContext } from "../../providers/LightDarkTheme";
import { LanguageContext } from "../../providers/Language";
import classNames from "classnames";
import { Theme } from "../DarkModeSwitchToggle";

const AppHeader = () => {
  const { theme } = useContext(LightDarkThemeContext);
  const { language } = useContext(LanguageContext);

  return (
    <div
      className={classNames(`min-h-[32px] min-h-[44px] grow-0 w-full uppercase text-lg font-semibold 
      flex items-center px-4 lg:px-8 sticky top-0`, {
        'bg-white border-b border-gray-400 text-black': theme === Theme.LIGHT,
        'bg-gray-900 border-b border-gray-500 text-white': theme === Theme.DARK,
      })}
    >
      {language.portfolio}
    </div>
  );
};

export default AppHeader;
