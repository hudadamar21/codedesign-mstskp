import MainFooter from "./partial/MainFooter";
import MainHeader from "./partial/MainHeader";

function MainLayout({ children }: { children: JSX.Element | JSX.Element[] }) {
  return (
    <>
      <MainHeader />
      <main>{children}</main>
      <MainFooter />
    </>
  );
}

export default MainLayout;
