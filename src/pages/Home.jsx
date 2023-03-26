import React from "react";
import ProfileAndCoverPicture from "../components/Profile/ProfileAndCoverPicture";
import ConstantValues from "../providers/Constants";

const Home = () => {

  return (
    <div>
      <ProfileAndCoverPicture
        profilePicture={ConstantValues.profilePicture}
        coverPicture={ConstantValues.coverPicture}
        name={ConstantValues.firstNameLastName}
      />
    </div>
  );
};

export default Home;
