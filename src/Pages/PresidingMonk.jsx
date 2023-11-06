// import { useState } from "react";
// import Dropdown from "../components/Dropdown";
import ReusableLayout from "../components/ReusableLayout";

const dummydata = [
  {
    data: [
      ["စည်ကမ်းထိန်းသိမ်းရေးဌာန", "Hello"],
      ["ကျောင်းသားရေးရာ", "Hi"],
      ["ကြီးကြပ် / စီမံ", "Hii"],
      ["ယဉ်ကျေးမှုဓလေ့", "HiiI"],
    ],
  },
  {
    data: [
      ["သာရေး/နာရေး", "Heyy"],
      ["ကျေးရွာပရဟိတ", "Heee"],
      ["ရေကမ္မတီ", "HiI"],
    ],
  },
];

const PresidingMonk = () => {
  return (
    <ReusableLayout dummydata={dummydata}>
      <p className="text-3xl font-bold my-5">တိုက်အုပ်ဆရာတော်ဆရာတော်</p>
    </ReusableLayout>
  );
  // const [selectedItem, setSelectedItem] = useState(null);

  // const handleClick = (title) => {
  //   setSelectedItem(title === selectedItem ? null : title);
  // };

  // const renderSubtitle = (data) => {
  //   return data.map(([title, body], i) => (
  //     <div key={i} className="bg-secondary title-div">
  //       <Dropdown
  //         handleClick={() => handleClick(title)}
  //         selectedItem={selectedItem}
  //       >
  //         <p>
  //           {title}
  //           {selectedItem === title ? <p>{body}</p> : null}
  //         </p>
  //       </Dropdown>
  //     </div>
  //   ));
  // };

  // return (
  //   <div className="px-16">
  //     <h1 className="text-3xl font-bold my-5">တိုက်အုပ်ဆရာတော်ဆရာတော်</h1>
  //     {dummydata.map((d, i) => (
  //       <div key={i} className="mb-5">
  //         {/* <Dropdown key={i}>
  //           <p className="text-xl">{d.title}</p>
  //         </Dropdown> */}
  //         {renderSubtitle(d.data)}
  //       </div>
  //     ))}
  //   </div>
  // );
};

export default PresidingMonk;
