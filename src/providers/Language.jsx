import React, { useState, createContext, useEffect } from "react";
import ConstantValues from "./Constants";

// Values
const LanguageValues = {
	en: {
		portfolio: "Portfolio",
		en: 'EN',
		jp: 'JP',

		profilePicture: "Profile Picture",
		coverPicture: "Cover Picture",

		personName: {
			namePlaceholder: "Your Name Displays Here",
			last: "Casindad",
			first: "Mc Allain",
			middle: "Sanchez",
			middleI: "S.",
			lastFirstMiddle: "Casindad, Mc Allain Sanchez",
			firstMiddleLast: "Mc Allain Sanchez Casindad",
			lastFirstMiddleI: "Casindad, Mc Allain S.",
			firstMiddleILast: "Mc Allain S. Casindad",
			lastFirst: "Casindad, Mc Allain",
			firstLast: "Mc Allain Casindad",
		},

		details: {
			header: "Design Engineer at Tsukiden Global Solutions Inc.",
			subHeader:
			"Studied Bachelor Science in Information Technology at Polytechnic University of the Philippines",
			location: 'Muntinlupa, Metro Manila',
		}
	},
	jp: {
		portfolio: "ポートフォリオ",
		en: 'EN',
		jp: 'JP',

		profilePicture: "プロフィール写真",
		coverPicture: "カバー写真",

		personName: {
			namePlaceholder: "ここにお名前が表示されます",
			last: "キャシンダド",
			first: "マックアレイン",
			middle: "サンチェズ",
			middleI: "S.",
			lastFirstMiddle: "キャシンダド, マックアレイン サンチェズ",
			firstMiddleLast: "マックアレイン サンチェズ キャシンダド",
			lastFirstMiddleI: "キャシンダド, マックアレイン S.",
			firstMiddleILast: "マックアレイン S. キャシンダド",
			lastFirst: "キャシンダド, マックアレイン",
			firstLast: "マックアレイン キャシンダド",
		},
		
		details: {
			header: "月電グローバルソリューションズ株式会社のデザインエンジニア",
			subHeader:
			"フィリピン・ポリテクニック大学で情報工学の学士号を取得",
			location: 'メトロマニラ、ムンティンルパ',
		}
	},
};

// Created Context from Values
export const LanguageContext = createContext();

export const Languages = {
	ENGLISH: 'ENGLISH',
	JAPANESE: 'JAPANESE',
};

// Provider
const LanguageProvider = ({ children }) => {
	const [language, setLanguage] = useState(LanguageValues.en);
	const [selectedLanguage, selectLanguage] = useState(Languages.ENGLISH);

	useEffect(() => {
		const savedLanguage = localStorage.getItem(ConstantValues.localStorageLanguageKey);
		if (savedLanguage) {
			changeLanguage(savedLanguage);
		}
	}, []);

	const changeLanguage = (selectedLanguage) => {
		selectLanguage(selectedLanguage);
		
		switch (selectedLanguage) {
			case Languages.ENGLISH:
				setLanguage(LanguageValues.en)
				break;
			case Languages.JAPANESE:
				setLanguage(LanguageValues.jp)
				break;
			default:
				setLanguage(LanguageValues.en)
				break;
		}

		localStorage.setItem(ConstantValues.localStorageLanguageKey, selectedLanguage);
	};

	const value = {
		language,
		selectedLanguage,
		changeLanguage,
	};

	return (
		<LanguageContext.Provider value={value}>
			{children}
		</LanguageContext.Provider>
	);
};

// Export Provider as Default
export default LanguageProvider;
