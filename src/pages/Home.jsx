import React, { useContext } from "react";
import ProfileAndCoverPicture from "../components/Profile/ProfileAndCoverPicture";
import ProfileIntro from "../components/Profile/ProfileIntro";
import { LanguageContext } from "../providers/Language";
import ConstantValues from "../providers/Constants";
import DarkModePanel from "../components/DarkModeTheme/DarkModePanel";
import ViewPager from "../components/ViewPager";
import Tab from "../components/ViewPager/Tab";
import Dropdown from "../components/ViewPager/Dropdown";

const Home = () => {
  const { language } = useContext(LanguageContext);

  return (
    <>
      <ProfileAndCoverPicture
        profilePicture={ConstantValues.profilePicture}
        coverPicture={ConstantValues.coverPicture}
        name={language.firstNameLastName}
      >
        <DarkModePanel />
      </ProfileAndCoverPicture>
      <ProfileIntro
        main={language.mainIntro}
        secondary={language.secondaryIntro}
        location={language.location}
      />
      <ViewPager className={'mt-2'}>
        <Tab name={'About me'}>About me</Tab>
        <Tab name={'Tech Stacks'}>Tech Stacks</Tab>
        <Dropdown name={'More'}>
          <Tab name={'Projects'}>Projects</Tab>
          <Tab name={'Experience'}>Experience</Tab>
          <Tab name={'Education'}>Education</Tab>
          <Tab name={'Links'}>Links</Tab>
          <Tab name={'References'}>References</Tab>
        </Dropdown>
        <Dropdown name={'More'}>
          <Tab name={'Links'}>Links</Tab>
          <Tab name={'References'}>References</Tab>
          <Tab name={'Projects'}>Projects</Tab>
          <Tab name={'Experience'}>Experience</Tab>
          <Tab name={'Education'}>Education</Tab>
        </Dropdown>
      </ViewPager>
    </>
  );
};

export default Home;
