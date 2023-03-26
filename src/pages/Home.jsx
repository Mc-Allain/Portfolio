import React, { useContext } from "react";
import ProfileAndCoverPicture from "../components/Profile/ProfileAndCoverPicture";
import ProfileIntro from "../components/Profile/ProfileIntro";
import { LanguageContext } from "../providers/Language";
import ConstantValues from "../providers/Constants";

const Home = () => {
  const { language } = useContext(LanguageContext);

  return (
    <div>
      <ProfileAndCoverPicture
        profilePicture={ConstantValues.profilePicture}
        coverPicture={ConstantValues.coverPicture}
        name={language.firstNameLastName}
      />
      <ProfileIntro
        main={language.mainIntro}
        secondary={language.secondaryIntro}
        location={language.location}
      />
    </div>
  );
};

export default Home;
