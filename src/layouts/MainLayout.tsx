function MainLayout({ children }: { children: JSX.Element }) {
  return (
    <>
      <header className="main-container fixed top-0 inset-0 z-10 text-white">
        <div className="w-full flex items-center justify-between gap- py-10">
          <div className="flex items-center gap-x-3">
            <img src="/mstskp-logo.svg" alt="mstskp logo" />
            <h1 className="font-source-sans-pro text-lg font-bold">MSTSKP</h1>
          </div>
          <nav className="flex items-center gap-16">
            <a href="#top" className="font-bold">Top</a>
            <a href="#features" className="opacity-60">Features</a>
            <a href="#reasons" className="opacity-60">Reasons</a>
            <a href="#alternatives" className="opacity-60">Alternatives</a>
          </nav>
          <div className="flex items-center ">
            <a href="#daftar" className="px-6 py-2 rounded-full">
              Mendaftar
            </a>
            <a href="#login" className="px-6 py-2 rounded-full bg-white font-bold text-black">
              Login
            </a>
          </div>
        </div>
      </header>

      <main>{children}</main>
    </>
  );
}

export default MainLayout;
