import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { LightDarkThemeContext, Theme } from "../../../providers/LightDarkTheme";
import classNames from "classnames";

const DarkModeIconToggle = () => {
	const { theme, changeTheme, THEME_COLORS } = useContext(LightDarkThemeContext);

	const selectTheme = (selectedTheme) => {
		changeTheme(selectedTheme);
	};

	return (
		<FontAwesomeIcon
			icon={theme === Theme.LIGHT ? faMoon : faSun}
			className={classNames(
				"text-xl p-2 sm:p-0 cursor-pointer",
				THEME_COLORS.THEME_TOGGLE_ICON
			)}
			onClick={() => {selectTheme(theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT)}}
		/>
	);
};

export default DarkModeIconToggle;
