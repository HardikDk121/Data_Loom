import Header from "./Header";
import Footer from "./Footer";
import { useLocation } from "react-router-dom";
function Layout({children})
{
    const location = useLocation();
    const hideHeaderFooterRoutes = ["/login", "/register"]; // Routes where header/footer should be hidden
  
    const shouldShowHeaderFooter = !hideHeaderFooterRoutes.includes(location.pathname);
  
    return (
      <div className="App bg-gray-900 size-full grid grid-cols-12 grid-rows-12">
        {shouldShowHeaderFooter && <Header />}
        {children}
        {shouldShowHeaderFooter && <Footer />}
      </div>
    );
}
export default Layout;