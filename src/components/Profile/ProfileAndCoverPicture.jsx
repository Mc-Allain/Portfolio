import React, { useContext } from "react";
import { LightDarkThemeContext } from "../../providers/LightDarkTheme";
import { LanguageContext } from "../../providers/Language";
import classNames from "classnames";
import { Theme } from "../DarkModeSwitchToggle";

const ProfileAndCoverPicture = ({ profilePicture, coverPicture, name, children }) => {
  const { theme } = useContext(LightDarkThemeContext);
  const { language } = useContext(LanguageContext);

  if (name === undefined) {
    name = language.namePlaceholder;
  }

  return (
    <div>
      <div className="w-full h-[36vw] max-h-[290px] overflow-hidden">
        <img src={coverPicture} alt={language.coverPicture} />
      </div>
      <div className="flex h-16 md:h-[55px] px-4 sm:px-8">
        <img
          className={classNames('rounded-full h-32 sm:h-40 border-4 -translate-y-1/2 sm:-translate-y-2/3', {
            'border-white': theme === Theme.LIGHT,
            'border-gray-800': theme === Theme.DARK,
          })}
          src={profilePicture}
          alt={language.profilePicture}
        /> {
          children ? children : ''
        }
      </div>
      <div className="px-4 sm:px-8 py-2 text-left text-xl sm:text-2xl">{name}</div>
    </div>
  );
};

export default ProfileAndCoverPicture;
