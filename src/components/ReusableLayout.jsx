import "../styles/presidingMonk.scss";

import ProgramLink from "../components/ProgramLink";

const ReusableLayout = ({ children, dummydata, style }) => {
  return (
    <div className={`px-8 md:px-16 mb-10`}>
      {children}
      <div
        className={`${
          style && "grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-14"
        }`}
      >
        {dummydata.map((d, i) => (
          <div key={i} className={`mb-5 bg-secondary rounded-md p-8`}>
            {d.data.map(([title, body, img], j) => (
              <div key={j}>
                {img && (
                  <img
                    src={img}
                    className="w-full h-32 object-cover rounded-md"
                  />
                )}
                <h1
                  className={`font-bold ${
                    j != 0 ? "text-title text-xl" : "text-black text-2xl"
                  }`}
                >
                  {title && <span>{title}</span>}
                </h1>
                <p className="text-title/80 mt-2">{body}</p>
              </div>
            ))}
            <div className="my-4 text-l font-bold text-title">
              {d.totalStudents && (
                <p>ကျောင်းသားစုစုပေါင်း - {d.totalStudents}</p>
              )}
              {d.graduatedStudents && (
                <p>ဘွဲ့ရကျောင်းသား - {d.graduatedStudents}</p>
              )}
              {d.totalTeachers && <p>ဆရာမဦးရေ - {d.totalTeachers}</p>}
              {d.currentStudents && (
                <p>လက်ရှိကျောင်းသား - {d.currentStudents}</p>
              )}
            </div>
            {style && (
              <ProgramLink
                style="text-sm px-5 py-2 rounded-3xl text-white bg-primary"
                href={d.websiteLink}
              >
                Website
              </ProgramLink>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReusableLayout;
