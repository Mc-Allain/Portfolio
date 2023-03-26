import React from "react";
import SwitchToggle from "./SwitchToggle";

const DarkModeSwitchToggle = ({
  onThemeChange = () => {},
  initialTheme = Theme.LIGHT,
}) => {
  const initialValue = initialTheme === Theme.DARK;

  const handleToggle = (isChecked) => {
    const selectedTheme = isChecked ? Theme.DARK : Theme.LIGHT;
    onThemeChange(selectedTheme);
  };

  return <SwitchToggle onChange={handleToggle} initialValue={initialValue} />;
};

export const Theme = {
  LIGHT: "LIGHT_THEME",
  DARK: "DARK_THEME",
};

export default DarkModeSwitchToggle;
