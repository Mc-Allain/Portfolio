import React, { useContext } from "react";
import { LightDarkThemeContext } from "../../providers/LightDarkTheme";

const AppHeader = ({ children }) => {
  const { theme } = useContext(LightDarkThemeContext);

  return (
    <div className="grow w-full flex justify-center overflow-y-scroll">
      <div className="min-h-full h-fit bg-white max-w-[800px]">{children}</div>
    </div>
  );
};

export default AppHeader;
