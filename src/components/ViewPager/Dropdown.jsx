import classNames from "classnames";
import React, { useContext, useEffect, useState } from "react";
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
  SMALL: "SMALL",
  MEDIUM: "MEDIUM",
  LARGE: "LARGE",
  EXTRA_LARGE: "EXTRA_LARGE",
  DOUBLE_EXTRA_LARGE: "DOUBLE_EXTRA_LARGE",
};

const Dropdown = ({
  children,
  id,
  handleDropdownTabOnClick,
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
  const [currentSizeType, setSizeType] = useState(SizeType.SMALL);

  useEffect(() => {
    const initialTabs = children.map((item, key) => {
      return {
        id: key,
        value: item.props.name,
        active: false,
        type: item.type.name,
        item: item,
      };
    });

    setTabs(initialTabs);

    breakPoints = overrideBreakPoint(smallBreakpoint);
    breakPoints = overrideBreakPoint(mediumBreakpoint, SizeType.MEDIUM);
    breakPoints = overrideBreakPoint(largeBreakpoint, SizeType.LARGE);
    breakPoints = overrideBreakPoint(
      extraLargeBreakpoint,
      SizeType.EXTRA_LARGE
    );
    breakPoints = overrideBreakPoint(
      doubleExtraLargeBreakpoint,
      SizeType.DOUBLE_EXTRA_LARGE
    );

    const handleResize = () => {
      const width = window.innerWidth;
      let realtimeSizeType = SizeType.SMALL;

      if (width >= breakPoints.DOUBLE_EXTRA_LARGE.minWidth) {
        realtimeSizeType = SizeType.DOUBLE_EXTRA_LARGE;
      } else if (width >= breakPoints.EXTRA_LARGE.minWidth) {
        realtimeSizeType = SizeType.EXTRA_LARGE;
      } else if (width >= breakPoints.LARGE.minWidth) {
        realtimeSizeType = SizeType.LARGE;
      } else if (width >= breakPoints.MEDIUM.minWidth) {
        realtimeSizeType = SizeType.MEDIUM;
      } else if (width >= breakPoints.SMALL.minWidth) {
        realtimeSizeType = SizeType.SMALL;
      }

      if (realtimeSizeType !== currentSizeType) {
        setSizeType(realtimeSizeType);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();
  }, [
    children,
    breakPoints,
    smallBreakpoint,
    mediumBreakpoint,
    largeBreakpoint,
    extraLargeBreakpoint,
    doubleExtraLargeBreakpoint,
  ]);

  useEffect(() => {
    onBreakpointChange(id, currentSizeType, breakPoints);
  }, [currentSizeType]);

  const overrideBreakPoint = (value, sizeType = SizeType.SMALL) => {
    if (value !== DropdownBreakpoints[sizeType]) {
      breakPoints[sizeType] = value;
    }

    return breakPoints;
  };

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

  return (
    <div
      className={classNames(
        `absolute border px-3 py-2 rounded-[16px] translate-y-12`,
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
  );
};

export default Dropdown;
