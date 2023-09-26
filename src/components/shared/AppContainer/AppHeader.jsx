import React, { useContext } from "react";
import { LightDarkThemeContext } from "../../../providers/LightDarkTheme";
import { LanguageContext } from "../../../providers/Language";
import classNames from "classnames";

const AppHeader = () => {
	const { THEME_COLORS } = useContext(LightDarkThemeContext);
	const { language } = useContext(LanguageContext);

	return (
		<div
			className={classNames(
				`min-h-[32px] min-h-[44px] grow-0 w-full uppercase text-lg font-semibold 
					flex items-center px-4 lg:px-8 sticky top-0 border-b-[1px]`,
					THEME_COLORS.APP_HEADER,
			)}
		>
			{language.portfolio}
		</div>
	);
};

export default AppHeader;
