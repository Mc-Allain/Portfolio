import React, { useContext } from "react";
import classNames from "classnames";
import { LanguageContext } from "../../../providers/Language";
import { LightDarkThemeContext } from "../../../providers/LightDarkTheme";
import DarkModeIconToggle from "../Toggle/DarkModeIconToggle";
import LanguageToggle from "../Toggle/LanguageToggle";
import "./styles.css";

const ProfileAndCoverPicture = ({ profilePicture, coverPicture, name }) => {
	const { THEME_COLORS } = useContext(LightDarkThemeContext);
	const { language } = useContext(LanguageContext);

	if (name === undefined) {
		name = language.personName.namePlaceholder;
	}

	return (
		<div className={classNames(
			THEME_COLORS.PROFILE_AND_COVER_PICTURE
		)}>
			<div className="w-full h-[36vw] max-h-[290px] overflow-hidden relative">
				<div className="absolute top-2 right-4 text-white font-bold text-border-black text-end ml-40">
					{language.coverPictureCaption}
				</div>
				<img src={coverPicture} alt={language.coverPicture} />
			</div>
			<div className="flex h-16 md:h-[55px] px-4 sm:px-8">
				<img
					className={classNames(
						'rounded-full h-32 sm:h-40 border-4 -translate-y-1/2 sm:-translate-y-2/3',
						THEME_COLORS.PROFILE_PICTURE_CONTAINER,
					)}
					src={profilePicture}
					alt={language.profilePicture}
				/> 
				<div className="w-full flex justify-end items-center gap-4">
					<LanguageToggle />
					<DarkModeIconToggle />
				</div>
			</div>
			<div className="px-4 sm:px-8 py-2 text-left text-xl sm:text-2xl">{name + (language.personName.nickname ? ' (' + language.personName.nickname +')' : '')}</div>
		</div>
	);
};

export default ProfileAndCoverPicture;
