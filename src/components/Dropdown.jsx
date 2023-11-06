import {
  IonIosArrowDropdown,
  MaterialSymbolsExpandCircleUpOutline,
} from "../utils/icon-utils";

const Dropdown = ({ children, handleClick, selectedItem }) => {
  const renderIcon = () => {
    const IconComponent =
      selectedItem !== null
        ? IonIosArrowDropdown
        : MaterialSymbolsExpandCircleUpOutline;
    return <IconComponent className="text-2xl ml-3" onClick={handleClick} />;
  };

  return (
    <div className="flex border-b-2 border-zinc-700 p-4">
      {children}
      {renderIcon()}
    </div>
  );
};

export default Dropdown;
