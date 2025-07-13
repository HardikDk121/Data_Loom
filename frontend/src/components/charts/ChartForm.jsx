import { useForm, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { formSchema } from "./formSchema";
import { Form } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import NestedForm from "./NestedForm";
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { useLocation } from "react-router-dom";

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
          dataKey: "",
          dataList: [{ label: "", }],
        },
      ],
      id: location.state?.id,
      createdAt: new Date(),
    },
  });

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: "dataSets",
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
                <textarea {...field} className="w-full border p-2" placeholder="Provide a description here (optional)" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {fields.map((field, index) => (
          <div key={field.id} className="border p-4 rounded space-y-2">
            <div className="flex w-full items-center gap-4">
              <FormField
                control={form.control}
                name={`dataSets.${index}.dataKey`}
                render={({ field }) => (
                  <FormItem className="w-1/3">
                    <FormLabel>DataKey</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="ex . month , date ,year  " />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button
                type="button"
                onClick={() => remove(index)}
                className="bg-red-500 mt-6 whitespace-nowrap"
              >
                Remove Group
              </Button>
            </div>

            {/* Nested form */}
            <NestedForm control={form.control} register={form.register} index={index} className="w-full" />
          </div>
        ))}

        <Button
          type="button"
          className="bg-green-600"
          onClick={() =>
            append({
              dataKey: "",
              dataList: [{ label: "", }],
            })
          }
        >
          Add new DataKey
        </Button>

      </form>
    </Form>
  );
};

export default FormComponent;
