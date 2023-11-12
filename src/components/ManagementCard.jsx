import ProgramLink from "./ProgramLink";
const categories = [
  [
    "/presidingMonk",
    "တိုက်အုပ်ဆရာတော်",
    "ကျေးရွာပရဟိတ",
    "စည်းကမ်းထိန်းသိမ်းရေး",
  ],
  [
    "/trustee",
    "ကျောင်းဂေါပကအဖွဲ့",
    "ဆောက်လုပ်ရေးဌာန",
    "ဆ္မမ်းကွမ်းဌာန",
    "ဘဏ္ဍာရေးဌာန",
  ],
  ["/doctrinalInstructor", "စာချဆရာတော်", "ပညာရေးဌာန", "ပြန်ကြားရေးဌာန"],
];

const ManagementCard = () => {
  const renderProgramLinks = (names, link) => {
    return names.map((name, i) => (
      <ProgramLink
        style="bg-primary rounded-md text-white p-4 outline-transparents"
        key={i}
        link={link}
      >
        <p className="">{name}</p>
      </ProgramLink>
    ));
  };
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 place-items-center">
      {categories.map(([link, title, ...names], i) => (
        <div key={i} className=" bg-secondary p-8 rounded-3xl">
          <h3 className="text-center text-xl ">{title}</h3>
          <div className="flex flex-col gap-5 my-5">
            {renderProgramLinks(names, link)}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ManagementCard;
