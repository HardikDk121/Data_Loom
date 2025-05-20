import { Button } from "@/components/ui/button"
import { BarChart } from "@/components/charts/BarCharts/BarIndex";
import { LineChart } from "@/components/charts/LineCharts/LineIndex";
import { PieChart } from "@/components/charts/PieCharts/PieIndex";
import { AreaChart } from "@/components/charts/AreaCharts/AreaIndex";
import { RadialChart } from "@/components/charts/RadialCharts/RadialIndex";
import ChartCard from "@/components/charts/ChartCard";

function Home() {

  return (
    <>
      <div className=" row-span-11 col-span-2 flex flex-col  rounded-r-sm sticky top-0   bg-gray-900 ">
        <h2 className="text-3xl text-gray-100 ">Charts</h2>
        <ul className="list-none   flex flex-col gap-2 m-4 ">
          <li className="flex-1  rounded-xs text-blue-400" >
            <ChartCard name={`Bar`} />
          </li>
          <li className="flex-1  rounded-xs text-blue-400">
            <ChartCard name={`Line`} />
          </li>
          <li className="flex-1  rounded-xs text-blue-400">
            <ChartCard name={`Pie`} />
          </li>
          <li className="flex-1  rounded-xs text-blue-400">
            <ChartCard name={`Radial`} />
          </li>
          <li className="flex-1  rounded-xs text-blue-400">
            <ChartCard name={`Area`} />
          </li>
        </ul>
        <Button className={`bg-red-600 hover:bg-red-700 rounded-none rounded-r-sm box-border mt-auto `}>Log out</Button>
      </div>
      <div className="row-span-11 col-span-10 grid grid-cols-12 auto-rows-fr grid-flow-dense gap-4  min-h-fit">
        <NoCharts/>

      </div>
    </>)
}

function NoCharts(params) {
  return(<>
        <img src="assets/images/empty-concept-illustration.png" className="col-span-6 opacity-80 rounded-2xl w-full block m-auto " />
        <div className="col-span-6 flex flex-col justify-center gap-4   ">
            <h2 className="text-4xl mb-2 font-semibold   ">Wow so empty</h2>
            <p className={"text-gray-300 text-16px"}>
              Add some charts to the dashboard to get started.
            </p>
        </div>
        </>
  )
}
export default Home;
