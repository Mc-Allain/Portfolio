import React, { useState, createContext, useContext, useEffect } from "react";
import ConstantValues from "./Constants";
import DarkModeSwitchToggle from "../components/shared/Toggle/DarkModeSwitchToggle";

// Values
export const Theme = {
	LIGHT: "LIGHT_THEME",
	DARK: "DARK_THEME",
};

const ThemeColors = {
	LIGHT: {
		APP_CONTAINER: 'bg-gray-200',
		APP_HEADER: 'bg-gray-100 text-black border-gray-300',
		APP_BODY: 'bg-gray-200 text-black',
		PROFILE_AND_COVER_PICTURE: 'bg-white',
		PROFILE_PICTURE_CONTAINER: 'border-white',
		PROFILE_INTRO: 'bg-white',
		PROFILE_LOCATION: 'text-gray-600',
		THEME_TOGGLE_ICON: 'text-gray-500 hover:text-blue-400',
		LANGUAGE_TOGGLE: 'text-gray-500 hover:text-gray-700',
	},
	DARK:  {
		APP_CONTAINER: 'bg-gray-700',
		APP_HEADER: 'bg-gray-900 text-white border-gray-600',
		APP_BODY: 'bg-gray-900 text-white',
		PROFILE_AND_COVER_PICTURE: 'bg-gray-800',
		PROFILE_PICTURE_CONTAINER: 'border-gray-800',
		PROFILE_INTRO: 'bg-gray-800',
		PROFILE_LOCATION: 'text-gray-300',
		THEME_TOGGLE_ICON: 'text-gray-400 hover:text-yellow-200 ',
		LANGUAGE_TOGGLE: 'text-gray-400 hover:text-gray-300',
	},
}

// Created Context from Values
export const LightDarkThemeContext = createContext();

// Provider
const LightDarkThemeProvider = ({ children }) => {
	const [theme, setTheme] = useState(Theme.LIGHT);
	const [THEME_COLORS, SET_COLORS] = useState(ThemeColors.LIGHT);

	useEffect(() => {
		const savedTheme = localStorage.getItem(ConstantValues.localStorageThemeKey);
		if (savedTheme) {
			changeTheme(savedTheme);
		}
	}, []);

	const changeTheme = (selectedTheme) => {
		setTheme(selectedTheme);
		localStorage.setItem(ConstantValues.localStorageThemeKey, selectedTheme);

		if (selectedTheme === Theme.LIGHT) {
			SET_COLORS(ThemeColors.LIGHT);
		} else if (selectedTheme === Theme.DARK) {
			SET_COLORS(ThemeColors.DARK);
		}
	}

	const value = {
		theme,
		changeTheme,
		THEME_COLORS,
	};

	return (
		<LightDarkThemeContext.Provider value={value}>
			{children}
		</LightDarkThemeContext.Provider>
	);
};


// Default Theme Component
export const LightDarkThemeToggle = () => {
	const { theme, changeTheme } = useContext(LightDarkThemeContext);

	const selectTheme = (selectedTheme) => {
		changeTheme(selectedTheme);
	};
	
	return (
		<DarkModeSwitchToggle
			onThemeChange={selectTheme}
			initialTheme={theme}
		/>
	);
};

// Export Provider as Default
export default LightDarkThemeProvider;
