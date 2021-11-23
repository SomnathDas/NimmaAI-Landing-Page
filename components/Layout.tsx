import React from "react";
import TopNavbar from "./TopNavbar";
import styles from "../styles/Layout.module.css";

const Layout = ({ children }: React.PropsWithChildren<{}>) => {
  return (
    <>
      <div id="main_layout" className={styles.layout_container}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#7DE2D1"
            fill-opacity="1"
            d="M0,224L40,208C80,192,160,160,240,149.3C320,139,400,149,480,165.3C560,181,640,203,720,186.7C800,171,880,117,960,112C1040,107,1120,149,1200,176C1280,203,1360,213,1400,218.7L1440,224L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"
          ></path>
        </svg>
        <TopNavbar />
        {children}
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#7DE2D1"
            fill-opacity="1"
            d="M0,224L40,208C80,192,160,160,240,149.3C320,139,400,149,480,165.3C560,181,640,203,720,186.7C800,171,880,117,960,112C1040,107,1120,149,1200,176C1280,203,1360,213,1400,218.7L1440,224L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
          ></path>
        </svg>
      </div>
    </>
  );
};

export default Layout;
