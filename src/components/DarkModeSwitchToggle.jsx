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

  return (
    <div>
      <SwitchToggle onChange={handleToggle} initialValue={initialValue} />
    </div>
  );
};

export const Theme = {
  LIGHT: "LIGHT THEME",
  DARK: "DARK THEME",
};

export default DarkModeSwitchToggle;
