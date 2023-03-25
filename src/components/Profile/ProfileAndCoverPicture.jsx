import React, { useContext } from "react";
import { LightDarkThemeContext } from "../../providers/LightDarkTheme";
import { LanguageContext } from "../../providers/Language";

const ProfileAndCoverPicture = ({ profilePicture, coverPicture, name }) => {
  const { theme } = useContext(LightDarkThemeContext);
  const { language } = useContext(LanguageContext);  

  if (name === undefined) {
    name = language.displayName;
  }

  return <div>{ name + ' ' + theme }</div>;
};

export default ProfileAndCoverPicture;
