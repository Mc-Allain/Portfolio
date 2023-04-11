import classNames from "classnames";
import React, { useContext, useEffect, useRef, useState } from "react";
import { TabType } from ".";
import { LightDarkThemeContext, Theme } from "../../providers/LightDarkTheme";
import TabCapsuleButton from "./TabCapsuleButton";

export const DropdownBreakpoints = {
  SMALL: {
    minWidth: 640,
    poppedTabs: 0,
  },
  MEDIUM: {
    minWidth: 768,
    poppedTabs: 0,
  },
  LARGE: {
    minWidth: 1024,
    poppedTabs: 0,
  },
  EXTRA_LARGE: {
    minWidth: 1280,
    poppedTabs: 0,
  },
  DOUBLE_EXTRA_LARGE: {
    minWidth: 1536,
    poppedTabs: 0,
  },
};

const SizeType = {
  VERY_SMALL: "VERY_SMALL",
  SMALL: "SMALL",
  MEDIUM: "MEDIUM",
  LARGE: "LARGE",
  EXTRA_LARGE: "EXTRA_LARGE",
  DOUBLE_EXTRA_LARGE: "DOUBLE_EXTRA_LARGE",
};

const Dropdown = ({
  children,
  id,
  currentDropdown,
  selectedDropdown,
  handleDropdownTabOnClick,
  activeDropdownTab,
  onBreakpointChange,
  breakPoints = DropdownBreakpoints,
  smallBreakpoint = DropdownBreakpoints.SMALL,
  mediumBreakpoint = DropdownBreakpoints.MEDIUM,
  largeBreakpoint = DropdownBreakpoints.LARGE,
  extraLargeBreakpoint = DropdownBreakpoints.EXTRA_LARGE,
  doubleExtraLargeBreakpoint = DropdownBreakpoints.DOUBLE_EXTRA_LARGE,
}) => {
  const { theme } = useContext(LightDarkThemeContext);
  const [tabs, setTabs] = useState([]);
  const breakPointsRef = useRef(breakPoints);
  const [sizeType, setSizeType] = useState(SizeType.SMALL);

  useEffect(() => {
    const initialTabs = children.map((item, key) => {
      let tab = {
        id: key,
        value: item.props.name,
        type: item.type.name,
        item: item,
      };

      if (
        id === activeDropdownTab?.selectedDropdown?.id &&
        key === activeDropdownTab?.selectedTab?.id
      ) {
        tab.active = true;
      } else {
        tab.active = false;
      }

      return tab;
    });

    setTabs(initialTabs);

    const overrideBreakPoint = (value, sizeType = SizeType.SMALL) => {
      if (value !== DropdownBreakpoints[sizeType]) {
        breakPointsRef.current[sizeType] = value;
      }

      return breakPointsRef.current;
    };

    breakPointsRef.current = overrideBreakPoint(smallBreakpoint);
    breakPointsRef.current = overrideBreakPoint(
      mediumBreakpoint,
      SizeType.MEDIUM
    );
    breakPointsRef.current = overrideBreakPoint(
      largeBreakpoint,
      SizeType.LARGE
    );
    breakPointsRef.current = overrideBreakPoint(
      extraLargeBreakpoint,
      SizeType.EXTRA_LARGE
    );
    breakPointsRef.current = overrideBreakPoint(
      doubleExtraLargeBreakpoint,
      SizeType.DOUBLE_EXTRA_LARGE
    );

    const handleResize = () => {
      const width = window.innerWidth;
      let newSizeType = SizeType.SMALL;

      if (width >= breakPointsRef.current.DOUBLE_EXTRA_LARGE.minWidth) {
        newSizeType = SizeType.DOUBLE_EXTRA_LARGE;
      } else if (width >= breakPointsRef.current.EXTRA_LARGE.minWidth) {
        newSizeType = SizeType.EXTRA_LARGE;
      } else if (width >= breakPointsRef.current.LARGE.minWidth) {
        newSizeType = SizeType.LARGE;
      } else if (width >= breakPointsRef.current.MEDIUM.minWidth) {
        newSizeType = SizeType.MEDIUM;
      } else if (width >= breakPointsRef.current.SMALL.minWidth) {
        newSizeType = SizeType.SMALL;
      } else {
        newSizeType = SizeType.VERY_SMALL;
      }

      if (newSizeType !== sizeType) {
        setSizeType(newSizeType);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();
  }, [
    id,
    children,
    activeDropdownTab,
    breakPointsRef,
    smallBreakpoint,
    mediumBreakpoint,
    largeBreakpoint,
    extraLargeBreakpoint,
    doubleExtraLargeBreakpoint,
    sizeType,
  ]);

  useEffect(() => {
    onBreakpointChange(id, sizeType, breakPointsRef.current);
  }, [onBreakpointChange, id, sizeType, breakPointsRef]);

  const onTabChange = (selectedTab) => {
    const id = selectedTab.id;

    selectedTab.active = true;

    const updatedTabs = tabs.map((item) => {
      if (item.id !== id) {
        item.active = false;
      }

      return item.id === id ? selectedTab : item;
    });

    setTabs(updatedTabs);
  };

  const handleOnClick = (selectedTab) => {
    if (selectedTab.type === TabType.Default) {
      onTabChange(selectedTab);
      handleDropdownTabOnClick(selectedTab);
    }
  };

  return currentDropdown === selectedDropdown ? (
    <div
      className={classNames(
        `absolute border px-3 py-2 rounded-[16px] translate-y-9`,
        {
          "bg-gray-100 border-gray-300": theme === Theme.LIGHT,
          "bg-gray-900 border-gray-600": theme === Theme.DARK,
        }
      )}
    >
      {tabs.map((tab, key) => {
        return (
          <TabCapsuleButton key={key} tab={tab} handleOnClick={handleOnClick}>
            {tab.value}
          </TabCapsuleButton>
        );
      })}
    </div>
  ) : (
    ""
  );
};

export default Dropdown;
