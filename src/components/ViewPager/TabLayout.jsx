import React, { useContext, useEffect, useState } from "react";
import { LightDarkThemeContext, Theme } from "../../providers/LightDarkTheme";
import classNames from "classnames";
import TabCapsuleButton from "./TabCapsuleButton";
import { TabType } from ".";
import Dropdown, { DropdownBreakpoints } from "./Dropdown";

const TabLayout = ({ tabs, onTabChange }) => {
  const { theme } = useContext(LightDarkThemeContext);
  const [selectedDropdown, selectDropdown] = useState(null);
  const [dropdowns, setDropdowns] = useState([]);

  useEffect(() => {
    const dropdowns = [];

    tabs.map((tab) => {
      if (tab.type === TabType.Dropdown) {
        dropdowns.push({
          id: tab.id,
          isShow: false,
          children: tab.item.props.children,
        });
      }

      return tab;
    });

    setDropdowns(dropdowns);
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
    
  };

  const initDropdown = (currentDropdown, selectedDropdown) => {
    const filteredDropdownTabs = dropdowns.filter((dropdown) => {
      return dropdown.id === currentDropdown.id;
    });

    const currentDropdownTabs = filteredDropdownTabs.length > 0 ? filteredDropdownTabs[0] : {children: []};
    const children = currentDropdownTabs.children;

    const handleDropdownTabOnClick = (selectedTab) => {
      onTabChange(selectedDropdown, selectedTab.item);
      selectDropdown(null);
    };

    return (
      <Dropdown
        id={currentDropdown.id}
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
            {tab?.type === TabType.Dropdown && dropdowns.length > 0 && (tab === selectedDropdown)
              ? initDropdown(tab, selectedDropdown)
              : ""}
          </div>
        );
      })}
    </div>
  );
};

export default TabLayout;
