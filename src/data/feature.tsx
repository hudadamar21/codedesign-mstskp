import DatabaseIcon from "../components/icon/DatabaseIcon";
import GlobeIcon from "../components/icon/GlobeIcon";
import ServerIcon from "../components/icon/ServerIcon";
import ZapIcon from "../components/icon/ZapIcon";

export const features = [
  {
    icon: <DatabaseIcon />,
    name: "Database",
    descripton:
      "Data insight yang banyak kan bakal disimpen di database, ya kalo datanya banyak kan jadi gede juga size database-nya.",
  },
  {
    icon: <ServerIcon />,
    name: "Server",
    descripton:
      "Kalo ada insight, kamu akan bulak balik ngecek kan? Otomatis server harus idup terus, itu butuh listrik!",
  },
  {
    icon: <ZapIcon />,
    name: "Listrik",
    descripton:
      "Biaya listrik mahal, bos! Listrik kita ini masih batu bara, nggak bagus buat lingkungan. Kalo pake nuklir sih oke-oke aja.",
  },
  {
    icon: <GlobeIcon />,
    name: "Lingkungan",
    descripton:
      "Pokoknya nggak bagus lah buat lingkungan, ini alesan kita kenapa gak kasih insight. Demi menyelamatkan bumi!",
  },
];