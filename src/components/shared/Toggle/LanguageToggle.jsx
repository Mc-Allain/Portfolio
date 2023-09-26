import React, { useContext } from 'react'
import { LanguageContext, Languages } from '../../../providers/Language';
import { LightDarkThemeContext } from '../../../providers/LightDarkTheme';
import classNames from 'classnames';

const LanguageToggle = () => {
	const { THEME_COLORS } = useContext(LightDarkThemeContext);
	const { language, selectedLanguage, changeLanguage } = useContext(LanguageContext);

	return (
		<div className={classNames(
			'text-lg font-medium cursor-pointer',
			THEME_COLORS.LANGUAGE_TOGGLE,
		)}
		onClick={() => {changeLanguage(selectedLanguage === Languages.ENGLISH ? Languages.JAPANESE : Languages.ENGLISH)}}
		> {
			selectedLanguage === Languages.ENGLISH ? (
				language.jp
			) : (
				language.en
			)
		}
		</div>
	)
}

export default LanguageToggle