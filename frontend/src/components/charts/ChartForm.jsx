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
          dataList: [{ label: "", data: 0 }],
        },
      ],
      id: location.state?.id ?? crypto.randomUUID(),
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
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
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
                <textarea {...field} className="w-full border p-2" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {fields.map((field, index) => (
          <div key={field.id} className="border p-4 rounded space-y-2">
            <FormField
              control={form.control}
              name={`dataSets.${index}.dataKey`}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>DataKey</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <NestedForm control={form.control} register={form.register} index={index} />
            <Button type="button" onClick={() => remove(index)} className="bg-red-500 mt-2">
              Remove this DataKey
            </Button>
          </div>
        ))}

        <Button
          type="button"
          className="bg-green-600"
          onClick={() =>
            append({
              dataKey: "",
              dataList: [{ label: "", data: 0 }],
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
