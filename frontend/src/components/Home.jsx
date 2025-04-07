import { Button } from "@/components/ui/button"
import { Link } from 'react-router-dom'
import { useLocation } from "react-router-dom";
import  BarChart   from "./BarChart";
import LineChart from "./LineChart"; 
import PieChart from "./PieChart";
function Home()
{
  const location =useLocation();
    const name = location.state?.name;
    
    return(
      <>
      <h1 className="text-2xl font-bold mb-4  text-center col-span-12 ">Welcome Back {name} 👋</h1>
      <div className="  row-span-11 col-span-2 flex flex-col  rounded-r-sm">
        <h2 className="text-3xl">Charts</h2>
        <ul className="list-none  h-40 flex flex-col gap-2 m-4 ">  
          <li className="flex-1  rounded-xs text-blue-400" >
            Bar
          </li>
          <li className="flex-1  rounded-xs text-blue-400"> 
            Line
           
          </li>
          <li className="flex-1  rounded-xs text-blue-400">
            Pie
          </li>
          
        </ul>
        <Button className={`bg-red-700 rounded-none rounded-r-sm box-border mt-auto `}>Log out</Button>
        </div>
        <div className="row-span-11 col-span-10   grid grid-cols-12 grid-rows-12 gap-4">
          <BarChart />
          <LineChart/>
          
          <PieChart/>
          </div>      
    </>)
}

export default Home;
