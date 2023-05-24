import { footerMenus } from "../../data/footer-menu";

function MainFooter() {
  return (
    <footer className="bg-white pb-32">
      <div className="main-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20">
        {footerMenus.map((menu, index) => (
          <div key={index}>
            <h2 className="text-sm font-bold uppercase mb-4">{menu.name}</h2>
            <ul className="space-y-2">
              {menu.list.map((list, i) => (
                <li key={i}>
                  <a className="hover:underline hover:opacity-80" href={list.url}>{list.name}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </footer>
  );
}

export default MainFooter;
