
import { useLocation } from "react-router-dom";

function Header() {
  const location =useLocation();
  const name = location.state?.name; 
  return (
    <header className="col-span-12 row-span-1 flex justify-center">
      <img src="/assets/images/logo-cropped.png" alt=""  className="w-32 self-start" />
      { name && (
       <h1 className="text-2xl font-bold mb-4 text-center col-span-12 text-gray-300 self-center ">Welcome Back {name} 👋</h1>)}      
    </header>
  );
}
export default Header;