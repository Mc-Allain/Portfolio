import React from "react";
import Switch from "./Switch";
import { Theme } from "../../../providers/LightDarkTheme";

const DarkModeSwitchToggle = ({
	onThemeChange = () => {},
	initialTheme = Theme.LIGHT,
}) => {
	const initialValue = initialTheme === Theme.DARK;

	const handleToggle = (isChecked) => {
		const selectedTheme = isChecked ? Theme.DARK : Theme.LIGHT;
		onThemeChange(selectedTheme);
	};

	return <Switch onChange={handleToggle} initialValue={initialValue} />;
};

export default DarkModeSwitchToggle;
