import ReusableLayout from "../components/ReusableLayout";
import DhamaSchool from "../assets/dhamaSchool.jpg";
import Mon from "../assets/mon.jpg";
import Preuniversity from "../assets/preUniversity.jpg";
import SBP from "../assets/SBP.jpg";
import Jamoi from "../assets/jamoi.jpg";
import BackButton from "../components/BackButton";

const dummyDataOne = [
  {
    data: [
      [
        "မွန်စာပေဌာန",
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        DhamaSchool,
      ],
    ],
    totalStudents: 500,
    graduatedStudents: 50,
    totalTeachers: 15,
    websiteLink: "/",
  },
  {
    data: [
      [
        "ဓမ္မစကူးလ်ဌာန",
        "To inform and educate the younger generation of Buddhists on the rich teachings and heritage of Buddhism.",
        Mon,
      ],
    ],
    totalStudents: 100,
    graduatedStudents: 500,
    totalTeachers: 8,
    websiteLink: "/",
  },
  {
    data: [
      [
        "Pre-University",
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        Preuniversity,
      ],
    ],
    totalStudents: 100,
    currentStudents: 40,
    graduatedStudents: 500,
    totalTeachers: 8,
    websiteLink: "https://blog-post-omega.vercel.app/",
  },
  {
    data: [
      [
        "Skill Building Program",
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        SBP,
      ],
    ],
    totalStudents: 100,
    currentStudents: 40,
    totalTeachers: 8,
    websiteLink: "https://blog-post-omega.vercel.app/",
  },
  {
    data: [
      [
        "Jamoi Foundation",
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        Jamoi,
      ],
    ],
    totalStudents: 100,
    currentStudents: 40,
    graduatedStudents: 500,
    totalTeachers: 8,
    websiteLink: "https://blog-post-omega.vercel.app",
  },
];

const dummyDataTwo = [
  {
    data: [
      [
        "မီဒီယာဌာန",
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      ],
    ],
  },
  {
    data: [
      [
        "ရုံးဌာန",
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      ],
    ],
  },
];

const DoctrinalInstructor = () => {
  return (
    <div className="px-8 md:px-16">
      <BackButton />
      <ReusableLayout dummydata={dummyDataOne} style={true}>
        <h2 className="text-3xl font-semibold my-8">ပညာရေးဌာန</h2>
      </ReusableLayout>
      <ReusableLayout dummydata={dummyDataTwo} style={true}>
        <h2 className="text-3xl font-semibold my-8">ပြန်ကြားရေးဌာန</h2>
      </ReusableLayout>
    </div>
  );
};

export default DoctrinalInstructor;
