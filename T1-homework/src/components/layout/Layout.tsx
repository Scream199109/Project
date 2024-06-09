import {Outlet} from "react-router-dom";
import cls from './Layout.module.scss';
import FooterNav from "./footer/FooterNav";

const Layout = () => {
  return (
    <div className={cls.wrapper}>

      <main className={cls.main}>
        <Outlet />
      </main>
      <FooterNav />
    </div>
  );
};

export default Layout;
