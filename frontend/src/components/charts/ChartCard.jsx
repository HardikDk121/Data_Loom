import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"


import { barChartsArray } from "./BarCharts/BarIndex";
import { lineChartsArray } from "./LineCharts/LineIndex";
import { pieChartsArray } from "./PieCharts/PieIndex";
import { areaChartsArray } from "./AreaCharts/AreaIndex";
import { radialChartsArray } from "./RadialCharts/RadialIndex";

import { useEffect, useState } from "react";

const chartMap = {
  Bar: barChartsArray,
  Line: lineChartsArray,
  Pie: pieChartsArray,
  Area: areaChartsArray,
  Radial: radialChartsArray,
};

function ChartCard(props) {
  let [charts,setCharts] = useState([]);

  useEffect(() => {
    setCharts(chartMap[props.name] || []);
  }, [props.name]);
  return (
    <Dialog className={`w-screen rounded-none`}>
      <DialogTrigger asChild>
        <Button
          variant=""
          className="w-full rounded-none bg-purple-800 hover:bg-purple-700 text-gray-200"
        >
          {props.name}
        </Button>
      </DialogTrigger>
      <DialogContent className="w-[calc(80dvw)] bg-neutral-900 text-gray-200 grid grid-cols-3">
        <DialogHeader className={`col-span-4`}>
          <DialogTitle className={``}>{props.name}</DialogTitle>
          <DialogDescription className={`w-full`}>
            Add a new {props.name} to your collection
          </DialogDescription>
        </DialogHeader>
        
          {charts.map((ChartComponent, index) => (
            <div className="py-4 col-span-1 space-y-4">
              <div key={index} className="items-center w-full">
                {ChartComponent}
              </div>
            </div>
          ))}

       
        <DialogFooter className={`col-span-4`}>
          <Button
            type="submit"
            className={`w-full bg-neutral-900 hover:bg-cyan-600`}
          >
            Save changes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default ChartCard;