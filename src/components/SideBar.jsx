import AppNav from "./AppNav";
import Logo from "./Logo";
import styles from "./SideBar.module.css";
import { Outlet } from "react-router-dom";

const SideBar = () => {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <AppNav />
      <Outlet />
      <footer className={styles.footer}>
        <p className={styles.copyright}>
          &copy; Copyright {new Date().getDate} by WorldWise Inc.
        </p>
      </footer>
    </div>
  );
};

export default SideBar;
