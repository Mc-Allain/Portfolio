import React, { useContext } from "react";
import classNames from "classnames";
import { LightDarkThemeContext } from "../../../providers/LightDarkTheme";

const ProfileIntro = ({ main, secondary, location }) => {
	const { THEME_COLORS } = useContext(LightDarkThemeContext);

	return (
		<div className={classNames(
			'pl-4 pr-5 sm:pl-8 sm:pr-10 pt-1 sm:pt-2 pb-5 text-left',
			THEME_COLORS.PROFILE_INTRO
		)}>
			<div className="sm:text-lg">{main}</div>
			<div className="text-sm sm:text-base mt-2">{secondary}</div>
			<div className={classNames(
				'text-sm sm:text-base',
				THEME_COLORS.PROFILE_LOCATION
			)}> {
				location
			}
			</div>
		</div>
	);
};

export default ProfileIntro;
