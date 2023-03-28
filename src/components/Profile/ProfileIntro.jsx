import React, { useContext } from "react";
import { LightDarkThemeContext, Theme } from "../../providers/LightDarkTheme";
import classNames from "classnames";

const ProfileIntro = ({ main, secondary, location }) => {
  const { theme } = useContext(LightDarkThemeContext);

  return (
    <div className={classNames('pl-4 pr-5 sm:pl-8 sm:pr-10 pt-1 sm:pt-2 pb-5 text-left', {
      'bg-white': theme === Theme.LIGHT,
      'bg-gray-800': theme === Theme.DARK,
    })}>
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
