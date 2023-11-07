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
};

export default PresidingMonk;
