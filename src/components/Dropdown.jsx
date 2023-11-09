import { useState } from "react";
import {
  IonIosArrowDropdown,
  MaterialSymbolsExpandCircleUpOutline,
} from "../utils/icon-utils";

const Dropdown = ({ title, body }) => {
  const [selectedItem, setSelectedItem] = useState(false);

  const handleClick = () => {
    setSelectedItem(!selectedItem);
  };

  const renderIcon = () => {
    const IconComponent = selectedItem
      ? MaterialSymbolsExpandCircleUpOutline
      : IonIosArrowDropdown;
    return <IconComponent className="text-2xl ml-3" onClick={handleClick} />;
  };

  return (
    <>
      <div className="flex items-center title-div ">
        <p>{title}</p>
        {renderIcon()}
      </div>
      {selectedItem && <p>{body}</p>}
    </>
  );
};

export default Dropdown;
