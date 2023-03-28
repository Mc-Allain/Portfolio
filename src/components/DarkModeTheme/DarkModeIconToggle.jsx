import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { LightDarkThemeContext, Theme } from "../../providers/LightDarkTheme";

const DarkModeIconToggle = () => {
  const { theme, changeTheme } = useContext(LightDarkThemeContext);

  const selectTheme = (selectedTheme) => {
    changeTheme(selectedTheme);
  };

  return (
    <> {
      theme === Theme.LIGHT ? (
        <FontAwesomeIcon
          icon={faMoon}
          className="text-gray-500 hover:text-blue-400 text-xl p-2 sm:p-0 cursor-pointer"
          onClick={() => {selectTheme(Theme.DARK)}}
        />
      ) : (
        <FontAwesomeIcon
          icon={faSun}
          className="text-gray-400 hover:text-yellow-200 text-xl p-2 sm:p-0 cursor-pointer"
          onClick={() => {selectTheme(Theme.LIGHT)}}
        />
      )}
    </>
  );
};

export default DarkModeIconToggle;
