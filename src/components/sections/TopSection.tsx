function TopSection() {
  return (
    <section className="relative pt-32">
      <img
        className="absolute top-0 inset-0 w-full"
        src="/images/bg-hero-section.svg"
        alt="bg hero section"
      />
      
      <div className="relative main-container z-10 text-center text-white mt-24">
        <img className="absolute top-16 left-10 " src="/images/dc1.svg" alt="decoration 1" />
        <img className="absolute top-0 right-10 " src="/images/dc2.svg" alt="decoration 2" />
        <div className="space-y-10 flex flex-col items-center justify-center">
          <div className="font-semibold text-primary -mb-5">MANA SAYA TAU SAYA KAN PENCURRY</div>
          <h1 className="text-6xl w-[70%] leading-[74px]">
            Social Media Tool Yang Tidak Akan Memberikan Kamu Insight Apapun
          </h1>
          <p className="text-lg w-1/2 leading-[34px]">
            Adalah benar apa yang kamu baca barusan. Tool yang mainstream akan memberikan kamu
            pelbagai insight, karena kami anti-mainstream maka kami akan melakukan sebaliknya.
          </p>
        </div>
        <div className="flex items-center justify-center gap-14 mt-20">
          <a href="#features" className="px-10 py-6 bg-primary hover:saturate-200 transition duration-300 rounded-full font-bold shadow-2xl shadow-primary/30">
            Memulai Sekarang
          </a>
          <a href="#features" className="flex items-center gap-x-3 font-bold">
            <img src="/icons/play-icon.svg" alt="play" />
            Pelajari Dulu
          </a>
        </div>

        <img className="mt-32" src="/images/hero-image.svg" alt="hero image" />
      </div>
    </section>
  );
}

export default TopSection;
