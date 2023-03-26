import React, { useContext } from "react";
import { LightDarkThemeContext } from "../../providers/LightDarkTheme";
import { LanguageContext } from "../../providers/Language";

const AppHeader = () => {
  const { theme } = useContext(LightDarkThemeContext);
  const { language } = useContext(LanguageContext);

  return (
    <div
      className="bg-white border-b-gray-300 h-[48px] sm:h-[60px] w-full uppercase border text-lg font-semibold 
    flex items-center px-4 lg:px-8 sticky top-0"
    >
      {language.portfolio}
    </div>
  );
};

export default AppHeader;
