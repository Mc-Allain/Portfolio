import React, { useState, createContext } from "react";


// Values
const LanguageValues = {
  en: {
      displayName: 'Display Name',
  },
  jp: {
      displayName: 'Namae',
  }
}


// Created Context from Values
export const LanguageContext = createContext(LanguageValues);

export const Languages = {
  ENGLISH: LanguageValues.en,
  JAPANESE: LanguageValues.jp,
}

// Provider
const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(LanguageValues.en);

  const changeLanguage = (selectedLanguage) => {
    setLanguage(selectedLanguage);
  }

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
