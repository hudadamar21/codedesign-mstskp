import PlayIcon from "../icon/PlayIcon";

function TopSection() {
  return (
    <section
      id="top"
      className="relative bg-[size:auto_100%] lg:bg-[size:100%_auto] bg-no-repeat pt-40 md:pt-56 pb-32"
      style={{ backgroundImage: "url(/images/bg-hero-section.svg)" }}>
      {/* <img
        className="absolute top-0 inset-0 w-full origin-top scale-y-"
        src="/images/bg-hero-section.svg"
        alt="bg hero section"
      /> */}

      <div className="relative main-container z-10 text-center text-white">
        <img
          className="absolute -top-16 md:top-16 -left-8 md:left-24 opacity-30 md:opacity-100"
          src="/images/dc1.svg"
          alt="decoration 1"
        />
        <img
          className="absolute top-36 -right-2 md:right-24 opacity-30 md:opacity-100"
          src="/images/dc2.svg"
          alt="decoration 2"
        />
        <div className="relative z-10 space-y-10 flex flex-col items-center justify-center">
          <div className="font-semibold text-primary -mb-5 tracking-widest">
            MANA SAYA TAU SAYA KAN PENCURRY
          </div>
          <h1 className="font-source-sans-pro text-4xl md:text-5xl lg:text-6xl w-[80%] md:w-[65%] md:leading-[74px]">
            Social Media Tool Yang Tidak Akan Memberikan Kamu Insight Apapun
          </h1>
          <p className="font-source-sans-pro text-lg w-[80%] md:w-1/2 leading-[34px]">
            Adalah benar apa yang kamu baca barusan. Tool yang mainstream akan memberikan kamu
            pelbagai insight, karena kami anti-mainstream maka kami akan melakukan sebaliknya.
          </p>
        </div>
        <div className="font-dm-sans flex items-center justify-center gap-6 md:gap-14 my-20">
          <a
            href="#features"
            className="px-6 md:px-10 py-4 md:py-6 bg-primary text-sm md:text-base hover:saturate-200 transition duration-300 rounded-full font-bold shadow-2xl shadow-primary/30">
            Memulai Sekarang
          </a>
          <a href="#features" className="flex items-center gap-x-3 text-sm md:text-base font-bold">
            <PlayIcon />
            Pelajari Dulu
          </a>
        </div>

        <img src="/images/hero-image.svg" alt="hero image" />
      </div>
    </section>
  );
}

export default TopSection;
