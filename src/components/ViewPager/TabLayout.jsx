import React, { useContext, useEffect, useState } from "react";
import { LightDarkThemeContext, Theme } from "../../providers/LightDarkTheme";
import classNames from "classnames";
import TabCapsuleButton from "./TabCapsuleButton";
import { TabType } from ".";
import Dropdown, { DropdownBreakpoints } from "./Dropdown";

const TabLayout = ({ tabs, onTabChange }) => {
  const { theme } = useContext(LightDarkThemeContext);
  const [selectedDropdown, selectDropdown] = useState(null);
  const [dropdownTabs, setDropdownTabs] = useState([]);

  useEffect(() => {
    const dropdownTabs = [];

    tabs.map((tab) => {
      if (tab.type === TabType.Dropdown) {
        dropdownTabs.push({
          id: tab.id,
          isShow: false,
          children: tab.item.props.children,
        });
      }
    });

    setDropdownTabs(dropdownTabs);
  }, [tabs]);

  const handleOnClick = (selectedTab) => {
    if (selectedTab.type === TabType.Default) {
      selectDropdown(null);
      onTabChange(selectedTab, selectedTab.item);
    } else if (selectedTab.type === TabType.Dropdown) {
      selectDropdown(selectedTab);
    }
  };

  const onBreakpointChange = (id, sizeType, breakpoints = DropdownBreakpoints) => {
    // console.log(id, sizeType, breakpoints);
  };

  const showDropdown = (dropdown, selectedDropdown) => {
    const filteredDropdownTab = dropdownTabs.filter((tab) => {
      return tab.id === dropdown.id;
    });

    const dropdownTab = filteredDropdownTab.length > 0 ? filteredDropdownTab[0] : {children: []};
    const children = dropdownTab.children;
    console.log(dropdownTab);

    const handleDropdownTabOnClick = (selectedTab) => {
      onTabChange(selectedDropdown, selectedTab.item);
    };

    return (
      <Dropdown
        id={dropdown.id}
        handleDropdownTabOnClick={handleDropdownTabOnClick}
        onBreakpointChange={onBreakpointChange}
      >
        {children}
      </Dropdown>
    );
  };

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
            <TabCapsuleButton tab={tab} handleOnClick={handleOnClick}>
              {tab.value}
            </TabCapsuleButton>
            {tab?.type === TabType.Dropdown && dropdownTabs.length > 0
              ? showDropdown(tab, selectedDropdown)
              : ""}
          </div>
        );
      })}
    </div>
  );
};

export default TabLayout;
