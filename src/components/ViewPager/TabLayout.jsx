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
  const [activeDropdown, setActiveDropdown] = useState({});

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
      if (selectedDropdown !== selectedTab) {
        selectDropdown(selectedTab);
      } else {
        selectDropdown(null);
      }
    }
  };

  const onBreakpointChange = (
    id,
    sizeType,
    breakpoints = DropdownBreakpoints
  ) => {
    const breakpoint = breakpoints[sizeType];
    const children = getDropdownChildren(id);

    console.log(breakpoint);
    console.log("Popped Tabs: ", children.slice(0, breakpoint.poppedTabs));
    console.log("Dropdown: ", children.slice(breakpoint.poppedTabs, children.length));
  };

  const getDropdownChildren = (dropdownId) => {
    const filteredDropdowns = dropdowns.filter((dropdown) => {
      return dropdown.id === dropdownId;
    });

    return filteredDropdowns.length > 0
        ? filteredDropdowns[0].children
        : [];
  }

  const initDropdown = (currentDropdown, selectedDropdown) => {
    const children = getDropdownChildren(currentDropdown.id);

    const handleDropdownTabOnClick = (selectedTab) => {
      onTabChange(selectedDropdown, selectedTab.item);
      setActiveDropdown({
        selectedDropdown: selectedDropdown,
        selectedTab: selectedTab,
      });
      selectDropdown(null);
    };

    return (
      <Dropdown
        id={currentDropdown.id}
        currentDropdown={currentDropdown}
        selectedDropdown={selectedDropdown}
        handleDropdownTabOnClick={handleDropdownTabOnClick}
        activeDropdown={activeDropdown}
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
            {tab?.type === TabType.Dropdown &&
            dropdowns.length > 0
              ? initDropdown(tab, selectedDropdown)
              : ""}
          </div>
        );
      })}
    </div>
  );
};

export default TabLayout;
