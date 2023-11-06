import { useState } from "react";
import Dropdown from "../components/Dropdown";
import "../styles/presidingMonk.scss";

const ReusableLayout = ({ children, dummydata }) => {
  console.log(dummydata);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleClick = (title) => {
    setSelectedItem(title === selectedItem ? null : title);
  };

  const renderSubtitle = (data) => {
    return data.map(([title, body], i) => (
      <div key={i} className="bg-secondary title-div">
        <Dropdown
          handleClick={() => handleClick(title)}
          selectedItem={selectedItem}
        >
          <p>
            {title}
            {selectedItem === title ? <p>{body}</p> : null}
          </p>
        </Dropdown>
      </div>
    ));
  };

  return (
    <div className="px-16">
      {children}
      {dummydata.map((d, i) => (
        <div key={i} className="mb-5">
          {/* <Dropdown key={i}>
                <p className="text-xl">{d.title}</p>
            </Dropdown> */}
          {/* <h1 className="text-3xl font-bold my-5">{d.title}</h1> */}
          {renderSubtitle(d.data)}
        </div>
      ))}
    </div>
  );
};

export default ReusableLayout;
