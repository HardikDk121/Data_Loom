import { Button } from "@/components/ui/button"
import { Link } from 'react-router-dom'
import { useLocation } from "react-router-dom";
function Home()
{
    const location =useLocation();
    const name = location.state?.name;
    return(
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold mb-4 text-white">Welcome to Home Page {name} </h1>
      
      
      <div className="flex flex-col items-center justify-center min-h-svh">
      <Button className="bg-slate-900">Click me</Button>
      </div>

      {/* Navigate to About Page */}
      <Link to="/about">
        <Button variant="outline">Go to About</Button>
      </Link>
    </div>)
}

export default Home;
