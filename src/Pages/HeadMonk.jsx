import { useState } from "react";
import headmonk from "../assets/headmonk.jpg";
import cn from "../utils/twMergeUtils";
import { Link } from "react-router-dom";
import {
  PhFacebookLogo,
  BxBxlGmail,
  MaterialSymbolsCallOutlineSharp,
  RiDoubleQuotesL,
} from "../utils/icon-utils";

const paragraphs =
  " Ven Kosalla is currently presiding Ven at Bartheikpitakotmonmonastery. He was born in Mudoon village,Chaungzone Township,Monstate in January 26 1976.His original name is Min Kyaw Swar Ooand Mehm KolSon in Mon. Oo Nyut Hla and Daw Nwge Win are his parent.He passed matriculation exam in 1992 with two distinctions. At theage of sixteen he got novice life in Thiho monastery,Mudoon Villageand studied pitakot there. He start studied Myanmar specializationat Mawlamyine University distance education in November 1993. He gotmonkhood at Pitakot monastery, Mudoon in May 13 1995. He gotBachelor of Arts (B.A) in 1997.He did in Yamanya Monk and regionalmon literature and culture team as a volunteer in 1999. He studiedand did volunteer in teaching at Pariyati Dayve mon monastery. Hedid vice responsible person at Mon-say-tanar foundation in 2000. Heparticipated in development, management and leadership training atlocal and international during 2001. He actived in local communitydevelopment with NGOs communities from 2002 to 2005. In 2006, heeducated to migrant workers from Thailand. He joined as a monlanguage part time tutor at Naresuan university, department ofMyanmarsar during 2007 to 2008. Andhe joined Buddha PhilosophyMaster degree at kelaniya,srilanka international university in2009.He got Master of Arts(MA)degree in 2010. Nai Kosalla became 6th presiding Ven at Tawkana monastery in January 2010 and leads incommunity development until these day.";

const socialLink = [
  {
    Icon: PhFacebookLogo,
    link: "",
  },
  {
    Icon: BxBxlGmail,
    link: "",
  },
  {
    Icon: MaterialSymbolsCallOutlineSharp,
    link: "",
  },
];
const HeadMonk = () => {
  const [clicked, setClicked] = useState(true);
  return (
    <>
      <h1 className="text-3xl font-semibold px-4 md:px-20 py-2">
        ကျောင်းထိုင်ဆရာတော်
      </h1>
      <div className="flex flex-col items-center">
        <img
          src={headmonk}
          alt="headmonk"
          className="w-32 h-32 rounded-[50%]"
        />
        <button className="w-fit flex bg-primary text-white text-2xl my-4 px-6 py-2 rounded-3xl ml-4">
          {socialLink.map((link, i) => (
            <Link key={i} className="mr-3 last:mr-0">
              {<link.Icon />}
            </Link>
          ))}
        </button>
        <div className="bg-secondary/50 text-slate-900 p-4 rounded-xl mx-8 mb-4 md:w-2/4 md:mx-auto">
          <RiDoubleQuotesL className="text-4xl" />
          <p
            className={cn("leading-8 indent-8 break-all hyphens-auto", {
              "line-clamp-6": clicked,
            })}
            onClick={() => setClicked(!clicked)}
          >
            {paragraphs}
          </p>
          <div className="flex justify-end">
            <RiDoubleQuotesL className="rotate-180 text-4xl " />
          </div>
        </div>
      </div>
    </>
  );
};

export default HeadMonk;
