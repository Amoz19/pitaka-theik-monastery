import React from "react";
import ReusableLayout from "../components/ReusableLayout";
import BackButton from "../components/BackButton";

const dummydata = [
  {
    data: [
      ["ဆောက်လုပ်ရေးဌာန"],
      [
        "စေတီတော်",
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      ],
      [
        "ကျောင်းအဆောက်အဦး",
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      ],
    ],
  },
  {
    data: [
      ["ဆွမ်းကွမ်းဌာန"],
      [
        "သံဃာတော်",
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      ],
      [
        "ကျောင်းသား",
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      ],
      [
        "စားဖိုဆောင်",
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      ],
    ],
  },
  {
    data: [
      ["ဘဏ္ဍာရေးဌာန"],
      [
        "သင်ကြားရေး",
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      ],
      [
        "စားဝတ်နေရေး",
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      ],
    ],
  },
];

const Trustee = () => {
  return (
    <div className="px-8 md:px-16">
      <BackButton />
      <ReusableLayout dummydata={dummydata}>
        <p className="text-3xl font-bold my-5">ကျောင်းဂေါပကအဖွဲ့</p>
      </ReusableLayout>
    </div>
  );
};

export default Trustee;
