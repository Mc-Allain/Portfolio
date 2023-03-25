import React, { useState } from "react";
import "./styles.css";

const SwitchToggle = ({onChange = () => {}, initialValue = false}) => {
  const [isChecked, setIsChecked] = useState(initialValue);

  const handleToggle = () => {
    const updatedValue = !isChecked;
    onChange(updatedValue);
    setIsChecked(updatedValue);
  };

  return (
    <label className="switch">
      <input type="checkbox" onChange={handleToggle} checked={isChecked} />
      <span className="slider"></span>
    </label>
  );
};

export default SwitchToggle;
