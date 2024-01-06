import BackButton from "../components/BackButton";
import ReusableLayout from "../components/ReusableLayout";

const dummydata = [
  {
    data: [
      ["စည်ကမ်းထိန်းသိမ်းရေးဌာန"],
      [
        "ကျောင်းသားရေးရာ",
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      ],
      [
        "ကြီးကြပ် / စီမံ",
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      ],
      [
        "ယဉ်ကျေးမှုဓလေ့",
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      ],
    ],
  },
  {
    data: [
      ["သာရေး/နာရေး"],
      [
        "ကျေးရွာပရဟိတ",
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      ],
      [
        "ရေကမ္မတီ",
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      ],
    ],
  },
];

const PresidingMonk = () => {
  return (
    <div className="px-8 md:px-16">
      <BackButton />
      <ReusableLayout dummydata={dummydata}>
        <p className="text-3xl font-bold my-5">တိုက်အုပ်ဆရာတော်ဆရာတော်</p>
      </ReusableLayout>
    </div>
  );
};

export default PresidingMonk;
