import React, { createContext } from "react";

// Values
const ConstantValues = {
  profilePicture: "./images/Profile.jpg",
  coverPicture: "./images/Cover.jpg",
  lastName: "Casindad",
  firstName: "Mc Allain",
  middleName: "Sanchez",
  middleInitial: 'S.',
  fullNameLastNameFirst: 'Casindad, Mc Allain Sanchez',
  fullName: 'Mc Allain Sanchez Casindad',
  fullNameLastNameFirstShortVersion: 'Casindad, Mc Allain S.',
  fullNameShortVersion: 'Mc Allain S. Casindad',
  lastNameFirstName: 'Casindad, Mc Allain',
  firstNameLastName: 'Mc Allain Casindad'
};

// Created Context from Values
export const ConstantContext = createContext(ConstantValues);

// Provider
const ConstantProvider = ({ children }) => {
  const value = {
    ConstantValues,
  };

  return (
    <ConstantContext.Provider value={value}>
      {children}
    </ConstantContext.Provider>
  );
};

// Export Provider as Default
export default ConstantProvider;
