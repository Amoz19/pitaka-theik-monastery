import React from "react";
import ReusableLayout from "../components/ReusableLayout";

const dummydata = [
  {
    data: [
      ["ဆောက်လုပ်ရေးဌာန", "Hello"],
      ["စေတီတော်", "Hi"],
      ["ကျောင်းအဆောက်အဦး", "Hii"],
    ],
  },
  {
    data: [
      ["ဆွမ်းကွမ်းဌာန", "Heyy"],
      ["သံဃာတော်", "Heee"],
      ["ကျောင်းသား", "HiI"],
      ["စားဖိုဆောင်", "HiI"],
    ],
  },
  {
    data: [
      ["ဘဏ္ဍာရေးဌာန", "Heyy"],
      ["သင်ကြားရေး", "Heee"],
      ["စားဝတ်နေရေး", "HiI"],
    ],
  },
];

const Trustee = () => {
  return (
    <ReusableLayout dummydata={dummydata}>
      <p className="text-3xl font-bold my-5">ကျောင်းဂေါပကအဖွဲ့</p>
    </ReusableLayout>
  );
};

export default Trustee;
