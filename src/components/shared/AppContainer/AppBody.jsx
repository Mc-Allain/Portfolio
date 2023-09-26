import classNames from "classnames";
import React, { useContext } from "react";
import { LightDarkThemeContext } from "../../../providers/LightDarkTheme";

const AppBody = ({ children }) => {
	const { THEME_COLORS } = useContext(LightDarkThemeContext);

	return (
		<div className="grow w-full flex justify-center overflow-y-auto">
			<div className={classNames(
				'min-h-full h-fit max-w-[800px]', 
				THEME_COLORS.APP_BODY
			)}> {
				children
			}
			</div>
		</div>
	);
};

export default AppBody;
