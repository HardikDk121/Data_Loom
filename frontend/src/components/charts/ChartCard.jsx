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
import { z } from "zod"
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useLocation } from "react-router-dom";


import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

const chartMap = {
  Bar: barChartsArray,
  Line: lineChartsArray,
  Pie: pieChartsArray,
  Area: areaChartsArray,
  Radial: radialChartsArray,
};
const formSchema = z.object({
  type: z.enum(["Bar", "Line", "Pie", "Area", "Radial"], {
    title: z.string().min(1, "Title is required"),
    errorMap: () => ({ message: "Please select a valid chart type" }),
  }),
  description: z.string().optional(),
  datasets: z.array(
    z.object({
      label: z.string().min(1, "Label is required"),
      data: z.array(z.number()).min(1, "At least one data point is required"),
    })
  ).min(1, "At least one dataset is required"),
  user: z.string(),
  createdAt: z.date(),
})

function ChartCard(props) {
  let [charts, setCharts] = useState([]);

  useEffect(() => {
    setCharts(chartMap[props.name] || []
    );
  }, [props.name]);
  const location = useLocation();
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      type: "",
      title: "",
      description: "",
      datasets: [{ label: "", data: [] }],
      user: location.state?.name || "",
      createdAt: new Date(),
    }
  });
  const handleSumbit = async (data) => {
    console.log("Form submitted with data:", data);
  }

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
      <DialogContent className="w-[calc(80dvw)] bg-neutral-900 text-gray-200 grid grid-cols-4">
        <DialogHeader className={`col-span-4`}>
          <DialogTitle className={``}>{props.name}</DialogTitle>
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
            <DialogContent className={`grid grid-cols-12 w-[calc(80dvw)] bg-neutral-900 text-gray-200 `} >
              <DialogHeader className={`col-span-12`}>
                <DialogTitle className={`text-gray-200`}>
                  {props.name} Chart {index + 1}
                </DialogTitle>
                <DialogDescription className={`text-gray-400`}>
                  Click to add this chart to your collection.
                </DialogDescription>
              </DialogHeader>
              <div className="col-span-4 py-4 space-y-4 ">
                {ChartComponent}
              </div>
              <div className="col-span-8">
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(handleSumbit)} className="space-y-8">
                    <FormField
                      control={form.control}
                      name="type"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>type</FormLabel>
                          <FormControl>
                            <Input placeholder="title" {...field} disabled/>
                          </FormControl>
                          <FormDescription>
                            Chart type(disabled).
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button type="submit">Submit</Button>
                  </form>
                </Form>
              </div>


              <DialogFooter className="col-span-12">
                <div className=" w-full bg-neutral-900 text-gray-200  ">
                  <Button
                    onClick={() => onSelectChart(ChartComponent)}
                    className="bg-purple-800 hover:bg-purple-700 text-gray-200 w-full"
                  >
                    Select Chart
                  </Button>
                </div>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        ))}


        <DialogFooter className={`col-span-4`}>
          {/*
          <Button
            type="submit"
            className={`w-full bg-neutral-900 hover:bg-cyan-600`}
          >
            Add chart
          </Button>
           */}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
function onSelectChart(ChartComponent) {

  console.log("Selected Chart Component:", ChartComponent);
}
export default ChartCard;