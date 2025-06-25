
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
import { Button } from "../ui/button";

const dataSetSchema = z.object({
  label: z.string().min(1, { message: "label is required" }),
  data: z.number({ invalid_type_error: "data must be a number" }).min(1, { message: "data is required" }),
});

// 📦 Grouped datasets under a key
const dataKeySchema = z.object({
  dataKey: z.string().min(1, { message: "dataKey is required" }),
  dataList: z.array(dataSetSchema).min(1, { message: "At least one dataset is required" }),
});

//  Top-level schema for the form
const formSchema = z.object({
  type: z
    .string()
    .trim()
    .regex(/^(Bar|Line|Pie|Area|Radial)-[1-5]$/i, {
      message: "Please select a valid chart type",
    }),
  title: z.string().min(1, { message: "Title is required" }),
  description: z.string().optional(),
  dataSets: z.array(dataKeySchema).min(1, { message: "At least one dataKey group is required" }),
  id: z.string(),
  createdAt: z.date(),
});

const FormComponent = (props) => {
  const location = useLocation();
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      type: `${props.chartSection}-${props.chartNo}`,
      title: "",
      description: "",
      id: location.state?.id,
      createdAt: new Date(),
    }
  });
  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: "datasets",
  });
  const handleSumbit = async (formData) => {
    try {
      console.log("Form submitted with data:", formData);
      const API_URL = import.meta.env.VITE_API_BASE_URL;
      const response = await axios.post(`${API_URL}/charts/new-chart`, formData);
      console.log("ok response ", response.status)

    }
    catch (error) {
      if (error.response) {
        // Server responded with a status other than 2xx
        console.error('Error status:', error.response.status);
        console.error('Error data:', error.response.data);
      } else if (error.request) {
        // No response received
        console.error('No response received:', error.request);
      } else {
        // Error setting up the request
        console.error('Axios error:', error.message);
      }
    }
  }
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
                <Input {...field} value={`${props.chartSection} - ${props.chartNo}`} readOnly />
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
      </form>
    </Form >
  );
}
export default FormComponent;
