import { Outlet } from "react-router";
import LayoutHead from "@/layouts/LayoutHead";
import LayoutFoot from "@/layouts/LayoutFoot";

const Layout = () => {
  return (
    <>
      <LayoutHead />
      <Outlet />
      <LayoutFoot />
    </>
  );
};

export default Layout;
