import React, { useContext } from "react";
import { LightDarkThemeContext } from "../../providers/LightDarkTheme";
import { LanguageContext } from "../../providers/Language";

const ProfileAndCoverPicture = ({ profilePicture, coverPicture, name }) => {
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
      <div className=" h-16 sm:h-20 px-4 sm:px-8">
        <img
          className="rounded-full h-32 sm:h-40 border-4 border-white -translate-y-1/2"
          src={profilePicture}
          alt={language.profilePicture}
        />
      </div>
      <div className="px-4 sm:px-8 py-2 text-left text-xl sm:text-2xl">{name}</div>
    </div>
  );
};

export default ProfileAndCoverPicture;
