import ReusableLayout from "../components/ReusableLayout";

const dummyDataOne = [
  {
    data: [["မွန်စာပေဌာန", "About"]],
    totalStudents: 500,
    graduatedStudents: 50,
    totalTeachers: 15,
    websiteLink: "/",
  },
  {
    data: [["ဓမ္မစကူးလ်ဌာန", "About"]],
    totalStudents: 100,
    graduatedStudents: 500,
    totalTeachers: 8,
    websiteLink: "/",
  },
  {
    data: [["Pre-University", "About"]],
    totalStudents: 100,
    currentStudents: 40,
    graduatedStudents: 500,
    totalTeachers: 8,
    websiteLink: "/",
  },
  {
    data: [["Skill Building Program", "About"]],
    websiteLink: "/",
  },
  {
    data: [["Jamoi Foundation", "About"]],
    websiteLink: "/",
  },
];

const dummyDataTwo = [
  {
    data: [["မီဒီယာဌာန", "About"]],
  },
  {
    data: [["ရုံးဌာန", "About"]],
  },
];

const DoctrinalInstructor = () => {
  // const [selectedItem, setSelectedItem] = useState(null);

  // const handleClick = (title) => {
  //   setSelectedItem(title === selectedItem ? null : title);
  // };

  return (
    <>
      <ReusableLayout dummydata={dummyDataOne} style={true}>
        <h2 className="text-3xl font-semibold mb-4">ပညာရေးဌာန</h2>
      </ReusableLayout>
      <ReusableLayout dummydata={dummyDataTwo} style={true}>
        <h2 className="text-3xl font-semibold mb-4">ပြန်ကြားရေးဌာန</h2>
      </ReusableLayout>
    </>
    // <div className="flex">
    //   {dummyData.map((data) => (
    //     <Dropdown
    //       handleClick={() => handleClick(data.title)}
    //       selectedItem={selectedItem}
    //     >
    //       <div>
    //         <p>{data.title}</p>
    //         {selectedItem === data.title ? <p>{data.body}</p> : null}
    //         <p>{data.totalStudents}</p>
    //         <p>{data.graduatedStudents}</p>
    //         <p>{data.currentStudents}</p>
    //       </div>
    //     </Dropdown>
    //   ))}
    // </div>

    // Render totalStudents inside ReusableLayout
  );
};

export default DoctrinalInstructor;
