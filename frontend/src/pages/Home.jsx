import { Button } from "@/components/ui/button"
import ChartCard from "@/components/charts/ChartCard";
import { FaRegChartBar } from "react-icons/fa";
import { FaChartLine } from "react-icons/fa";
import { FaChartArea } from "react-icons/fa";
import { GrRadial } from "react-icons/gr";
import { FaChartPie } from "react-icons/fa";
import { RiLogoutBoxRLine } from "react-icons/ri";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
function Home() {
  const navigate = useNavigate();
  const redirectToLogin = () => {
    navigate("/login")
  }
  const location = useLocation();
  const [userCharts, setUserCharts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {

        const API_URL = import.meta.env.VITE_API_BASE_URL;
        const userId = location.state?.id;
        const respone = await axios.post(`${API_URL}/charts/find-charts`, { id: userId });
        if (respone.data) {
          console.log(respone.data)
          setUserCharts(respone.data)
        }
      }
      catch (error) {
        console.error("error: occured: \n", error);
      }
    }
    fetchData()
  }, [])
  return (
    <>
      <div className=" row-span-11 col-span-2 flex flex-col  rounded-r-sm sticky top-0   bg-gray-900 ">
        <h2 className="text-3xl text-gray-100 ">Charts</h2>
        <ul className="list-none  flex flex-col gap-2 mt-4 font-bold  ">
          <li className="flex-1  rounded-xs text-blue-400" >
            <ChartCard name={`Bar`} icon={FaRegChartBar} />
          </li>
          <li className="flex-1  rounded-xs text-blue-400">
            <ChartCard name={`Line`} icon={FaChartLine} />
          </li>
          <li className="flex-1  rounded-xs text-blue-400">
            <ChartCard name={`Area`} icon={FaChartArea} />
          </li>
          <li className="flex-1  rounded-xs text-blue-400">
            <ChartCard name={`Radial`} icon={GrRadial} />
          </li>
          <li className="flex-1  rounded-xs text-blue-400">
            <ChartCard name={`Pie`} icon={FaChartPie} />
          </li>
        </ul>
        <Button className={`bg-red-600 hover:bg-red-700 rounded-none rounded-r-sm box-border mt-auto `}
          onClick={() => redirectToLogin()}
        ><RiLogoutBoxRLine className="inline" />Log out</Button>
      </div>
      <div className="row-span-11 col-span-10 grid grid-cols-12 auto-rows-fr grid-flow-dense gap-4  min-h-fit">
        {!userCharts.length ? (<NoCharts />) : (userCharts.map((chart, index) => {
          return (<p key={index}>{chart.title}</p>)
        }
        ))}
      </div>
    </>)
}

function NoCharts() {
  return (<>
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
