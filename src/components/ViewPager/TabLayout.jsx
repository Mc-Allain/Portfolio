import React, { useContext, useState } from "react";
import { LightDarkThemeContext, Theme } from "../../providers/LightDarkTheme";
import classNames from "classnames";
import TabCapsuleButton from "./TabCapsuleButton";
import { TabType } from ".";
import Dropdown from "./Dropdown";

const TabLayout = ({ tabs, onTabChange }) => {
  const { theme } = useContext(LightDarkThemeContext);
  const [selectedDropdown, selectDropdown] = useState(null);

  const handleOnClick = (selectedTab) => {
    if (selectedTab.type === TabType.Default) {
      selectDropdown(null);
      onTabChange(selectedTab, selectedTab.item);
    } else if (selectedTab.type === TabType.Dropdown) {
      selectDropdown(selectedTab);
    }
  };

  const showDropdown = (selectedDropdown) => {
    const children = selectedDropdown.item.props.children;

    const handleDropdownTabOnClick = (selectedTab) => {
      onTabChange(selectedDropdown, selectedTab.item);
    }
    
    return (
      <Dropdown handleDropdownTabOnClick={handleDropdownTabOnClick}>
        {children}
      </Dropdown>
    );
  }

  return (
    <div
      className={classNames("w-full px-2 py-3 flex flex-wrap items-center", {
        "bg-white": theme === Theme.LIGHT,
        "bg-gray-800": theme === Theme.DARK,
      })}
    >
      {tabs.map((tab, key) => {
        return (
          <div className="relative flex flex-col items-center" key={key}>
            <TabCapsuleButton
              tab={tab}
              handleOnClick={handleOnClick}
            >
              {tab.value}
            </TabCapsuleButton> {
              tab.id === selectedDropdown?.id ?
                showDropdown(selectedDropdown) : ''
            }
          </div>
        );
      })}
    </div>
  );
};

export default TabLayout;
