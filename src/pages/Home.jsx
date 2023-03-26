import React, { useContext } from "react";
import ProfileAndCoverPicture from "../components/Profile/ProfileAndCoverPicture";
import { ConstantContext } from "../providers/Constants";

const Home = () => {
  const { ConstantValues } = useContext(ConstantContext);

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
