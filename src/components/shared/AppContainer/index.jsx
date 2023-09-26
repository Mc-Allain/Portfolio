import React, { useContext } from "react";
import { LightDarkThemeContext } from "../../../providers/LightDarkTheme";
import classNames from 'classnames';

const AppContainer = ({ children }) => {
	const { THEME_COLORS } = useContext(LightDarkThemeContext);

	return (
		<div className={classNames(
			'h-screen flex flex-col',
			THEME_COLORS.APP_CONTAINER,
		)}> {
			children
		}
		</div>
	);
};

export default AppContainer;
