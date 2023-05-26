import { features } from "../../data/feature";
import PlayIcon from "../icon/PlayIcon";

function FeaturesSection() {
  return (
    <section id="features" className="relative main-container grid grid-cols-1 md:grid-cols-2 gap-20 md:gap-0 items-center mt-20 md:mt-44 px-5">
      <div className="md:pr-24">
        <div className="text-primary uppercase flex items-center gap-x-2 mb-2 font-semibold">
          <div className="h-1 w-12 bg-primary"></div>
          Kenapa Sih?
        </div>
        <h2 className="text-4xl font-bold leading-[54px]">
          Kenapa Kami Tidak Memberikan Insight Apapun?
        </h2>
        <p className="leading-8 mt-5 mb-12 opacity-60">
          Di sini kita akan klarifikasi mengapa kita tidak memberikan insight apapun di tool ini
          kepada kamu. Pada dasarnya hal ini kami lakukan semata-mata ingin menyelamatkan planet
          bumi.
        </p>
        <a
          href="#"
          className="flex items-center justify-center gap-3 px-8 py-5 bg-dark shadow-2xl shadow-dark/30 text-white rounded-full w-max">
          Pelajari Lebih Lanjut
          <div className="-mb-1">
            <PlayIcon />
          </div>
        </a>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-dark/5">
        {features.map((feature, i) => (
          <div
            className={`
            [&:first-child_.icon]:!bg-white/10 
              first:bg-dark 
              first:text-white 
              first:shadow-dark/10 
              first:shadow-2xl 
              first:relative 
              first:rounded-[10px] p-9 
              bg-light 
            `}
            key={i}>
            <div className="flex items-center gap-3 mb-5">
              <div className="icon p-3 bg-primary/10 rounded-lg">{feature.icon}</div>
              <h3>{feature.name}</h3>
            </div>
            <p className="leading-[30px] text-sm md:text-base">{feature.descripton}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FeaturesSection;
