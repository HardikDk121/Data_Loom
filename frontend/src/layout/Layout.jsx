import Header from "./Header";
import Footer from "./Footer";
import { useLocation } from "react-router-dom";

function Layout({ children }) {
  const location = useLocation();
  const hideHeaderFooterRoutes = ["/login", "/register"]; // Routes where header/footer should be hidden

  const shouldShowHeaderFooter = !hideHeaderFooterRoutes.includes(location.pathname.toLowerCase());

  return (
    <div className="App min-w-full max-w-dvw  min-h-dvh max-h-fit     bg-neutral-900 size-full grid grid-cols-12 auto-rows-auto gap-4   ">

      {shouldShowHeaderFooter && <Header />}

      <main className={`col-span-12 row-span-10  grid grid-cols-12 auto-rows-auto  w-full h-full object-cover text-gray-100`}>

        {children}
      </main>

      {shouldShowHeaderFooter && <Footer />}

    </div>
  );
}
export default Layout;
