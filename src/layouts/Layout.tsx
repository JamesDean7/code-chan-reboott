import { Outlet } from "react-router";
import LayoutHead from "@/layouts/LayoutHead";
import LayoutFoot from "@/layouts/LayoutFoot";
import { ErrorBoundary } from "react-error-boundary";
import LayoutBodyErrorFallback from "@/layouts/_fallbacks/LayoutBodyErrorFallback";
import { QueryErrorResetBoundary } from "@tanstack/react-query";

const Layout = () => {
  return (
    <>
      <LayoutHead />
      <QueryErrorResetBoundary>
        <ErrorBoundary fallbackRender={LayoutBodyErrorFallback}>
          <Outlet />
        </ErrorBoundary>
      </QueryErrorResetBoundary>
      <LayoutFoot />
    </>
  );
};

export default Layout;
