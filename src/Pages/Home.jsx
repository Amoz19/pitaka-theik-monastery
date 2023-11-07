import { useNavigate } from "react-router-dom";
import "../styles/home.scss";
import hero8 from "../assets/hero8.png";
import ProgramLink from "../components/ProgramLink";
import ManagementCard from "../components/ManagementCard";

const programs = [
  ["Pre-University", "/doctrinalInstructor"],
  ["Jamoi Foundation", "/doctrinalInstructor"],
  ["Skill Building", "/doctrinalInstructor"],
  ["မွန်စာပေ", "/doctrinalInstructor"],
  ["စမ္မစကူးလ်", "/doctrinalInstructor"],
];

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="px-3 md:px-20 mt-3">
      <div className="mw-full" id="home">
        <img src={hero8} className="w-full" />
      </div>

      <div className="text-primary text-l md:text-2xl lg:text-3xl stroke-primary stroke-3 md:text-center my-5 title">
        <h2>RAMONNYA NIKAYA MON PITAKA THEIK MONASTERY</h2>
        <h2>ဘာတိုက်ပိဋကတ်မန်</h2>
      </div>

      <div className="sub-title my-8 md:my-16" id="programs">
        <h2 className="text-xl text-primary mb-3">Programs</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
          {programs.map(([programs, link], i) => (
            <ProgramLink key={i} link={link}>
              <p>{programs}</p>
            </ProgramLink>
          ))}
        </div>
      </div>

      <div className="sub-title mb-8 md:mb-16" id="committee">
        <h2 className="text-primary text-xl">Management Committee</h2>
        <div className="flex justify-center my-5">
          <ProgramLink
            style="bg-primary rounded-md text-white p-4"
            link="headMonk"
          >
            <p className="management-title text-xl">ကျောင်းထိုင်ဆရာတော်</p>
          </ProgramLink>
        </div>
        <ManagementCard />
      </div>
    </div>
  );
};

export default Home;
