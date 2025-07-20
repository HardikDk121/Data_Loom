import { useForm, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { formSchema } from "./formSchema";
import { Form } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  FormField, FormItem, FormLabel, FormControl, FormMessage
} from "@/components/ui/form";
import { useLocation } from "react-router-dom";

import NestedForm from "./NestedForm"; // Import the nested form component
const FormComponent = (props) => {
  const location = useLocation();
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      type: `${props.chartSection}-${props.chartNo}`,
      title: "",
      description: "",
      dataSets: [
        {
          label: "",
          values: {}
        }
      ],
      id: location.state?.id || "",
      createdAt: new Date(),
    },
  });

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: "dataSets"
  });


  const handleSubmit = async (data) => {
    console.log("Submitted data:", data);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4" id="chart-form">
        <FormField
          control={form.control}
          name="type"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Chart Type</FormLabel>
              <FormControl>
                <Input {...field} readOnly />
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
              <FormControl>
                <Input {...field} placeholder="Enter chart title" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <textarea {...field} className="w-full border p-2" placeholder="Optional description" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {fields.map((field, index) => {
          return (
            <div key={field.id} className="border p-4 rounded space-y-2">
              <div className="flex justify-between items-center">
                <FormField
                  control={form.control}
                  name={`dataSets.${index}.label`}
                  render={({ field }) => (
                    <FormItem className="w-1/2">
                      <FormLabel>Label</FormLabel>
                      <FormControl>
                        <Input {...field} placeholder="e.g., January" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="button" onClick={() => remove(index)} className="bg-red-500">
                  Remove Dataset
                </Button>
              </div>

              {/* Render dynamic key-value inputs */}
              <NestedForm index={index} control={form.control} register={form.register} />
              <Button type="button" onClick={() => append({})} className="bg-blue-600">
                Add Data Key
              </Button>
            </div>
          );
        })}

        <Button
          type="button"
          className="bg-green-600"
          onClick={() => append({ label: "", values: {} })}
        >
          Add New Dataset Row
        </Button>
      </form>
    </Form>
  );
};

export default FormComponent;
