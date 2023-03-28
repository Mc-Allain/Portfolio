import React, { useContext } from "react";
import classNames from "classnames";
import { LightDarkThemeContext, Theme } from "../../providers/LightDarkTheme";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { TabType } from ".";

const TabCapsuleButton = ({ children, tab, handleOnClick = () => {} }) => {
  const { theme } = useContext(LightDarkThemeContext);

  return (
    <div id={tab.id}
      className={classNames("px-4 py-1 mx-1 my-1 rounded-full font-medium h-fit whitespace-nowrap", {
        'text-gray-600': theme === Theme.LIGHT,
        'text-gray-400': theme === Theme.DARK,
        'cursor-default': tab.active,
        'cursor-pointer': !tab.active,
        'bg-blue-200 text-blue-500':
          tab.active && theme === Theme.LIGHT,
        'hover:bg-gray-300': !tab.active && theme === Theme.LIGHT,
        'bg-blue-900 text-blue-200':
          tab.active && theme === Theme.DARK,
        'hover:bg-gray-700': !tab.active && theme === Theme.DARK,
      })}
      onClick={(element) => {
        if (!tab.active) {
          handleOnClick(tab);
        }
      }}
    >
      {children} {
        tab.type === TabType.Dropdown ?
        <FontAwesomeIcon icon={faCaretDown} className="ml-1" /> : ''
      }
    </div>
  );
};

export default TabCapsuleButton;
