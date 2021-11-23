import styles from "../styles/TopNavbar.module.css";
import { NavbarListType } from "../typings/NavbarList";
import Link from "next/link";
import { GrContactInfo } from "react-icons/gr";
import { SiAboutdotme } from "react-icons/si";
import { AiOutlineCloudDownload } from "react-icons/ai";

const TopNavbar = () => {
  return (
    <nav className={styles.topnavbar_container}>
      <NavbarList TextForLogo="Nimma AI" />
    </nav>
  );
};

const NavbarList = ({ TextForLogo }: { TextForLogo: string }) => {
  return (
    <>
      <ul className={styles.navbar_list}>
        <h2 className={styles.logo_text}>{TextForLogo}</h2>
        <div className={styles.navbar_list__container}>
          {navbarList.length !== 0
            ? navbarList.map((elem) => {
                return (
                  <li key={elem.key}>
                    <Link href={elem.path}>
                      <a className={styles.navlink}>
                        {elem.icon ? elem.icon : elem.name}
                      </a>
                    </Link>
                  </li>
                );
              })
            : "Empty"}
        </div>
      </ul>
    </>
  );
};

const navbarList: NavbarListType[] = [
  {
    name: "download",
    path: "/download",
    key: 623,
    icon: <AiOutlineCloudDownload size={38} />,
  },
  {
    name: "about",
    path: "/about",
    key: 452,
    icon: <SiAboutdotme size={38} />,
  },
  {
    name: "contact",
    path: "/contact",
    key: 145,
    icon: <GrContactInfo size={38} />,
  },
];

export default TopNavbar;
