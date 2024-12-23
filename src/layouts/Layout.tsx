import { Outlet } from "react-router";
import { ReactNodeChildren } from "../types/lib-react";

const Layout = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default Layout;
