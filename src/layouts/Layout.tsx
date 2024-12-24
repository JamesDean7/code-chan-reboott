import { Outlet } from "react-router";
import LayoutHead from "@/layouts/LayoutHead";

const Layout = () => {
  return (
    <div>
      <LayoutHead />
      <Outlet />
    </div>
  );
};

export default Layout;
