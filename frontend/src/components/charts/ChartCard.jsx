"use client"
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
import FormComponent from "./ChartForm";
const chartMap = {
  Bar: barChartsArray,
  Line: lineChartsArray,
  Pie: pieChartsArray,
  Area: areaChartsArray,
  Radial: radialChartsArray,
};


function ChartCard(props) {
  let [charts, setCharts] = useState([]);

  useEffect(() => {
    setCharts(chartMap[props.name] || []
    );
  }, [props.name]);

  const onSelectChart = (ChartComponent) => {
    console.log("Selected Chart Component:", ChartComponent);
  }

  return (
    <Dialog className={`w-screen rounded-none`}>
      <DialogTrigger asChild>
        <Button
          variant=""
          className="w-full  rounded-none bg-purple-800 hover:bg-purple-700 text-gray-200 text-md font-extralight text-start ">
          <props.icon />{props.name}
        </Button>
      </DialogTrigger>
      <DialogContent className="w-[calc(80dvw)] bg-neutral-900 text-gray-200 grid grid-cols-4">
        <DialogHeader className={`col-span-4`}>
          <DialogTitle className={``}><props.icon className={`inline m-1`} />{props.name}</DialogTitle>
          <DialogDescription className={`w-full`}>
            Add a new {props.name} to your collection
          </DialogDescription>
        </DialogHeader>

        {charts.map((ChartComponent, index) => (
          <Dialog key={index}>
            <DialogTrigger>
              <div className="py-4 col-span-1 space-y-4 "  >

                <div className="items-center w-full hover:cursor-pointer transition duration-500 hover:scale-105 hover:border-neutral-100 hover:z-50 ">
                  {ChartComponent}
                </div>

              </div>
            </DialogTrigger>
            <DialogContent className={`grid grid-cols-12 w-[calc(80dvw)] bg-neutral-900 text-gray-200 max-h-[80vh] overflow-y-auto `} >
              <DialogHeader className={`col-span-12`}>
                <DialogTitle className={`text-gray-200`}>
                  <props.icon className={`inline m-1`} />{props.name} Chart {index + 1}
                </DialogTitle>
                <DialogDescription className={`text-gray-400`}>
                  Click to add this chart to your collection.
                </DialogDescription>
              </DialogHeader>
              <div className="col-span-4 py-4 space-y-4 ">
                {ChartComponent}
              </div>
              <div className="col-span-8">
                <FormComponent chartSection={props.name} chartNo={index + 1} />
              </div>


              <DialogFooter className="col-span-12">
                <div className=" w-full bg-neutral-900 text-gray-200  ">
                  <Button
                    onClick={() => onSelectChart(ChartComponent)}
                    className="bg-cyan-600 hover:bg-cyan-500 text-gray-200 w-full"
                    type="submit"
                    form="chart-form"
                  >
                    Select Chart
                  </Button>
                </div>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        ))
        }


        <DialogFooter className={`col-span-4`}>
        </DialogFooter>
      </DialogContent >
    </Dialog >
  );
}
export default ChartCard;
