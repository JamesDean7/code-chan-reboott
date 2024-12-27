import { Outlet } from "react-router";
import { ErrorBoundary } from "react-error-boundary";
import { QueryErrorResetBoundary } from "@tanstack/react-query";
import LayoutHead from "@/layouts/LayoutHead";
import LayoutFoot from "@/layouts/LayoutFoot";
import LayoutBodyErrorFallback from "@/layouts/_fallbacks/LayoutBodyErrorFallback";

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
