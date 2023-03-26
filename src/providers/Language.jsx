import React, { useState, createContext } from "react";

// Values
const LanguageValues = {
  en: {
    portfolio: "Portfolio",
    profilePicture: "Profile Picture",
    coverPicture: "Cover Picture",
    namePlaceholder: "Your Name Displays Here",
    lastName: "Casindad",
    firstName: "Mc Allain",
    middleName: "Sanchez",
    middleInitial: "S.",
    fullNameLastNameFirst: "Casindad, Mc Allain Sanchez",
    fullName: "Mc Allain Sanchez Casindad",
    fullNameLastNameFirstShortVersion: "Casindad, Mc Allain S.",
    fullNameShortVersion: "Mc Allain S. Casindad",
    lastNameFirstName: "Casindad, Mc Allain",
    firstNameLastName: "Mc Allain Casindad",
    mainIntro: "Design Engineer at Tsukiden Global Solutions Inc.",
    secondaryIntro:
      "Studied Bachelor Science in Information Technology at Polytechnic University of the Philippines",
    location: 'Muntinlupa, Metro Manila',
  },
  jp: {
    namePlaceholder: "ここにお名前が表示されます",
    lastName: "カシンダド",
    firstName: "マックアレイン",
    middleName: "サンチェズ",
    middleInitial: "S.",
    fullNameLastNameFirst: "シンダド, マックアレイン サンチェズ",
    fullName: "マックアレイン サンチェズ シンダド",
    fullNameLastNameFirstShortVersion: "シンダド, マックアレイン S.",
    fullNameShortVersion: "マックアレイン S. シンダド",
    lastNameFirstName: "シンダド, マックアレイン",
    firstNameLastName: "マックアレイン シンダド",
    mainIntro: "月電グローバルソリューションズ株式会社のデザインエンジニア",
    secondaryIntro:
      "フィリピン・ポリテクニック大学で情報工学の学士号を取得",
    location: 'メトロマニラ、ムンティンルパ',
  },
};

// Created Context from Values
export const LanguageContext = createContext(LanguageValues);

export const Languages = {
  ENGLISH: LanguageValues.en,
  JAPANESE: LanguageValues.jp,
};

// Provider
const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(LanguageValues.en);

  const changeLanguage = (selectedLanguage) => {
    setLanguage(selectedLanguage);
  };

  const value = {
    language,
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
