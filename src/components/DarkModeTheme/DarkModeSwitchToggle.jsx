import React from "react";
import { Theme } from "../../providers/LightDarkTheme";
import SwitchToggle from "../SwitchToggle";

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

export default DarkModeSwitchToggle;
