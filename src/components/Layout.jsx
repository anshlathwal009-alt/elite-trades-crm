import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";

export default function Layout() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div style={{ backgroundColor: "var(--color-bg)" }}>
      <Navigation />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}