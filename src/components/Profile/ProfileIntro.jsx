import classNames from "classnames";
import React, { useContext } from "react";
import { LightDarkThemeContext, Theme } from "../../providers/LightDarkTheme";

const ProfileIntro = ({ main, secondary, location }) => {
  const { theme } = useContext(LightDarkThemeContext);

  return (
    <div className="pl-4 pr-5 sm:pl-8 sm:pr-10 py-1 sm:py-2 text-left">
      <div className="sm:text-lg">{main}</div>
      <div className="text-sm sm:text-base   mt-2">{secondary}</div>
      <div className={classNames('text-sm sm:text-base  ' , {
        'text-gray-900': theme === Theme.LIGHT,
        'text-gray-300': theme === Theme.DARK,
      })}>{location}</div>
    </div>
  );
};

export default ProfileIntro;
