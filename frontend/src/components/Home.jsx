import { Button } from "@/components/ui/button"
import { Link } from 'react-router-dom'
import { useLocation } from "react-router-dom";
import  BarChart   from "./charts/BarChart";
import LineChart from "./charts/LineChart"; 
import PieChart from "./charts/PieChart";
import AreaChart from "./charts/AreaChart";
import RadialChart from "./charts/RadialChart";
function Home()
{
  const location =useLocation();
    const name = location.state?.name;
    
    return(
      <>
      <h1 className="text-2xl font-bold mb-4  text-center col-span-12 ">Welcome Back {name} 👋</h1>
      <div className="row-span-11 col-span-2 flex flex-col  rounded-r-sm sticky top-0 h-fit bg-gray-900 ">
        <h2 className="text-3xl text-gray-100 ">Charts</h2>
        <ul className="list-none  h-40 flex flex-col gap-2 m-4 ">  
          <li className="flex-1  rounded-xs text-blue-400" >
            <Button variant={``} className={`w-full rounded-none bg-purple-800  `}>Bar</Button>
            
          </li>
          <li className="flex-1  rounded-xs text-blue-400"> 
            <Button variant={``} className={`w-full rounded-none bg-purple-800  `}>Line</Button>
            
           
          </li>
          <li className="flex-1  rounded-xs text-blue-400">
            <Button variant={``} className={`w-full rounded-none bg-purple-800  `}>Pie</Button>
            
          </li>
          <li className="flex-1  rounded-xs text-blue-400">
            <Button variant={``} className={`w-full rounded-none bg-purple-800  `}>Radial</Button>
            
          </li>
          
        </ul>
        <Button className={`bg-red-700 rounded-none rounded-r-sm box-border mt-auto `}>Log out</Button>
        </div>
        <div className="row-span-11 col-span-10 grid grid-cols-12 auto-rows-fr grid-flow-dense gap-4 h-fit">
          <BarChart />
          <LineChart/>
          <PieChart/>
          <AreaChart/>
          <BarChart />
          <LineChart/>
          <RadialChart/>
          <PieChart/>
          <AreaChart/>
          <AreaChart/>
          <BarChart />
          <LineChart/>
          <PieChart/>
          <AreaChart/>
          <AreaChart/>
          <BarChart />
          <LineChart/>
          <PieChart/>
          <AreaChart/>
          </div>      
    </>)
}

export default Home;
