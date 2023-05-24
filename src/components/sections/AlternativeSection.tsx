import { alternatives } from "../../data/alternatives";
import ArrowRight from "../icon/ArrowRight";

function AlternativeSection() {
  return (
    <section className="relative z-10 py-32 text-white mt-64 bg-white">
      <div className="absolute inset-0 z-[-1] bg-primary w-[98.5%] mx-auto rounded-3xl rotate-0 h-[720px]"></div>
      <div className="absolute inset-0 bg-dark skew-x-1 -skew-y-1 w-[98.5%] mx-auto -rotate-1 rounded-3xl h-[720px]"></div>
      <div className="relative z-10 main-container grid grid-cols-2 items-center gap-10 ">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <div className="h-[2px] w-14 bg-white"></div>
            ALTERNATIVES
          </div>
          <h2 className="text-4xl font-bold leading-[54px]">
            Karena Tool Kita Ini Nggak Ada Apa-Apanya, Inilah Alternatifnya!
          </h2>
        </div>
        <div>
          <p className="leading-[30px]">
            Seperti yang lo tau sendiri ya, tool ini tuh nggak ada apa-apanya. Barangkali lo udah
            serius gitu butuh tool untuk sosial media, maka dari itu kita kasih 2 alternatif yang
            bisa lo pake untuk sosial media lo.
          </p>
        </div>
      </div>
      <div className="relative z-10 main-container bg-white rounded-3xl p-20 grid grid-cols-2 gap-10 text-black mt-20 shadow-2xl">
        {alternatives.map((alternative, i) => (
          <div className="space-y-6" key={i}>
            <img className="rounded-lg w-full" src={alternative.thumbnail} alt={alternative.name} />
            <p className="text-[22px]">{alternative.description}</p>
            <a href={alternative.url} className="flex items-center gap-3 font-semibold">
              Learn More
              <ArrowRight />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default AlternativeSection;
