import { useEffect, useState } from "react";
import MenuIcon from "../../components/icon/MenuIcon";

function MainHeader() {
  const [openMenu, setOpenMenu] = useState(false);
  const [isTop, setIsTop] = useState(true);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setIsTop(false);
      } else {
        setIsTop(true);
      }
    });
  }, []);

  return (
    <header
      className={`font-dm-sans fixed top-0 inset-x-0 z-20 w-full text-white transition duration-300 ${
        !isTop ? "bg-dark/90 backdrop-blur " : ""
      }`}>
      <div
        className={`main-container w-full flex items-center justify-between gap-5 p-5 md:px-0 transition-all duration-300 ${
          isTop ? "md:py-16" : "md:py-5"
        }`}>
        <div className="relative z-10 flex items-center gap-x-3">
          <img className="w-8 md:w-12 h-8 md:h-12" src="/mstskp-logo.svg" alt="mstskp logo" />
          <h1 className="font-source-sans-pro text-base md:text-lg font-bold">MSTSKP</h1>
        </div>
        <button
          onClick={() => setOpenMenu((val) => !val)}
          className="relative z-10 rounded-lg md:hidden"
          type="button">
          <MenuIcon />
        </button>
        <nav
          className={`absolute md:static top-0 left-0 w-full flex flex-col md:flex-row justify-center items-center pt-24 md:pt-0 pb-10 md:pb-0 bg-dark md:bg-transparent gap-8 md:gap-16 transition duration-300 ${
            openMenu ? "translate-y-0" : "-translate-y-full md:-translate-y-0"
          }`}>
          <a href="#top" className="font-bold">
            <div onClick={() => setOpenMenu(false)}>Top</div>
          </a>
          <a href="#features" className="opacity-60">
            <div onClick={() => setOpenMenu(false)}>Features</div>
          </a>
          <a href="#reasons" className="opacity-60">
            <div onClick={() => setOpenMenu(false)}>Reasons</div>
          </a>
          <a href="#alternatives" className="opacity-60">
            <div onClick={() => setOpenMenu(false)}>Alternatives</div>
          </a>
          <a href="#daftar" className="md:hidden px-6 py-2 rounded-full">
            <div onClick={() => setOpenMenu(false)}>Mendaftar</div>
          </a>
          <a
            href="#login"
            className="md:hidden px-6 py-2 rounded-full bg-white font-bold text-black">
            Login
          </a>
        </nav>
        <div className="hidden md:flex items-center">
          <a href="#daftar" className="px-6 py-2 rounded-full">
            Mendaftar
          </a>
          <a href="#login" className="px-6 py-2 rounded-full bg-white font-bold text-black">
            Login
          </a>
        </div>
      </div>
    </header>
  );
}

export default MainHeader;
