import { Button } from "@/components/ui/button"
import { BarChart } from "@/components/charts/BarCharts/BarIndex";
import { LineChart } from "@/components/charts/LineCharts/Lineindex";
import { PieChart } from "@/components/charts/PieCharts/PieIndex";
import { AreaChart } from "@/components/charts/AreaCharts/AreaIndex";
import { RadialChart } from "@/components/charts/RadialCharts/RadialIndex";
import ChartCard from "@/components/charts/ChartCard";

function Home()
{
   
    return(
      <>

      <div className="row-span-11 col-span-2 flex flex-col  rounded-r-sm sticky top-0 h-fit bg-gray-900 ">
        <h2 className="text-3xl text-gray-100 ">Charts</h2>
        <ul className="list-none  h-50 flex flex-col gap-2 m-4 ">  
          <li className="flex-1  rounded-xs text-blue-400" >
            <ChartCard   name={`Bar`} />
            
          </li>
          <li className="flex-1  rounded-xs text-blue-400"> 
            <ChartCard  name={`Line`} />
            
           
          </li>
          <li className="flex-1  rounded-xs text-blue-400">
            <ChartCard   name={`Pie`}/>
            
          </li>
          <li className="flex-1  rounded-xs text-blue-400">
            <ChartCard name = {`Radial`}/>
          </li>
          <li className="flex-1  rounded-xs text-blue-400">
            <ChartCard  name = {`Area`}/>
          </li>
          
            
          
        </ul>
        <Button className={`bg-red-600 hover:bg-red-700 rounded-none rounded-r-sm box-border mt-auto `}>Log out</Button>
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
