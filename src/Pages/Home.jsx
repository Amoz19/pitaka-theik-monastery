import "../styles/home.scss";
import hero8 from "../assets/hero8.png";
import ProgramLink from "../components/ProgramLink";
import ManagementCard from "../components/ManagementCard";

export const programs = [
  ["Pre-University", "/doctrinalInstructor"],
  ["Jamoi Foundation", "/doctrinalInstructor"],
  ["Skill Building", "/doctrinalInstructor"],
  ["မွန်စာပေ", "/doctrinalInstructor"],
  ["စမ္မစကူးလ်", "/doctrinalInstructor"],
];

const Home = () => {
  return (
    <div className="px-3 md:px-20 mt-3">
      <div className="mw-full" id="home">
        <img src={hero8} className="w-full" />
      </div>

      <div className="text-primary text-center text-2xl lg:text-3xl md:text-center my-5 title">
        <h2>Welcome from Bhaltike Webpage</h2>
        <h2>ဒုင်တၠုင်ရအဴ</h2>
      </div>

      <div className="sub-title my-8 md:my-16" id="programs">
        <h2 className="text-2xl font-black text-secondary mb-3 decoration">
          Programs
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
          {programs.map(([programs, link], i) => (
            <ProgramLink
              key={i}
              link={link}
              style={"outline outline-offset-0 outline-cyan-600/40"}
            >
              <p>{programs}</p>
            </ProgramLink>
          ))}
        </div>
      </div>

      <div className="sub-title mb-8 md:mb-16" id="committee">
        <h2 className="text-primary text-2xl mb-4">Management Committee</h2>
        <ManagementCard />
      </div>
    </div>
  );
};

export default Home;
