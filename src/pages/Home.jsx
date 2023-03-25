import React, { useState } from "react";
import DarkModeSwitchToggle, {
  Theme,
} from "../components/DarkModeSwitchToggle";
import ProfileAndCoverPicture from "../components/Profile/ProfileAndCoverPicture";
import AppHeaderPlaceHolder from "../components/Placeholder/AppHeaderPlaceholder";

const Home = () => {
  const [theme, setTheme] = useState(Theme.DARK);

  return (
    <div>
      <AppHeaderPlaceHolder>
        <DarkModeSwitchToggle onThemeChange={setTheme} initialTheme={theme} />

        <ProfileAndCoverPicture
          profilePicture={""}
          coverPicture={""}
          name={"Mc Allain Casindad"}
        />
      </AppHeaderPlaceHolder>
    </div>
  );
};

export default Home;
