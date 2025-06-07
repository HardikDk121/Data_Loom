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
import { useForm, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useLocation } from "react-router-dom";
import axios from "axios";

import {
  Form,
  FormControl,
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


function ChartCard(props) {
  let [charts, setCharts] = useState([]);

  useEffect(() => {
    setCharts(chartMap[props.name] || []
    );
  }, [props.name]);

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
          {/*
          <Button
            type="submit"
            className={`w-full bg-neutral-900 hover:bg-cyan-600`}
          >
            Add chart
          </Button>
           */}
        </DialogFooter>
      </DialogContent >
    </Dialog >
  );
}
const onSelectChart = (ChartComponent) => {

  console.log("Selected Chart Component:", ChartComponent);
}

const formSchema = z.object({
  type: z.string()
    .trim()
    .regex(/^(Bar|Line|Pie|Area|Radial)-[1-5]$/i, {
      message: "Please select a valid chart type",
    }),
  title: z.string().min(1, "Title is required"),
  description: z.string().optional(),
  datasets: z.array(
    z.object({
      label: z.string().min(1, "Label is required"),
      data: z.array(z.number()).min(1, "At least one data point is required"),
    })
  ).min(1, "At least one dataset is required")
    .refine(
      (datasets) => {
        const labels = datasets.map((d) => d.label);
        return new Set(labels).size === labels.length;
      },
      { message: "Labels must be unique", path: ["datasets"] }
    ),
  user: z.string(),
  createdAt: z.date(),
})

const FormComponent = (props) => {

  const location = useLocation();
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      type: `${props.chartSection}-${props.chartNo}`,
      title: "",
      description: "",
      datasets: [{ label: "", data: [] }],
      user: location.state?.name,
      createdAt: new Date(),
    }
  });
  const handleSumbit = async (formData) => {
    try {
      console.log("Form submitted with data:", formData);
      const apiurl = import.meta.VITE_API_URL;
      const response = await axios.post(`${apiurl}/newchart`,
        {
          'contenct-type': 'application / json',
          'body': JSON.stringify(FormData),
        });
    }
    catch (error) {
      console.error(error);
    }

  }
  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: "datasets",
  });
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSumbit)} className="space-y-4" id="chart-form">
        <FormField
          control={form.control}
          name="type"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Chart Type</FormLabel>
              <FormControl>
                <Input {...field} value={`${props.chartSection}-${props.chartNo}`} readOnly />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl >
                <Input {...field} placeholder="Enter chart title" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )} />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <textarea {...field} placeholder="Enter chart description" className="border rounded-sm p-4" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )} />
        {fields.map((field, index) => (
          <div key={field.id} className="border p-4 rounded space-y-2">
            <FormField
              control={form.control}
              name={`datasets.${index}.label`}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Label</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter label" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name={`datasets.${index}.data`}
              render={({ field }) => {
                const [inputValue, setInputValue] = useState(
                  (field.value || []).join(", ")
                );

                return (
                  <FormItem>
                    <FormLabel>Data (comma separated)</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="e.g., 1, 2, 3"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        onBlur={() => {
                          const parsed = inputValue
                            .split(",")
                            .map((n) => parseFloat(n.trim()))
                            .filter((n) => !isNaN(n));
                          field.onChange(parsed);
                          setInputValue(parsed.join(", ")); // reset cleaned format
                        }}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                );
              }}
            />

            <Button
              type="button"
              variant="destructive"
              onClick={() => remove(index)}
            >
              Remove Dataset
            </Button>
          </div>
        ))}

        <Button
          type="button"
          onClick={() => append({ label: "", data: [] })}
          className={` bg-green-800 hover:bg-green-600 text-gray-200`}
        >
          Add Dataset
        </Button>
      </form>
    </Form>
  );
}
export default ChartCard;
