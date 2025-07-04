import { useFieldArray } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";

const NestedForm = ({ control, index, register }) => {
  const { fields, append, remove } = useFieldArray({
    control,
    name: `dataSets.${index}.dataList`,
  });

  return (
    <div className="space-y-2  ">
      {fields.map((field, dataIndex) => (
        <div key={field.id} className="border p-2 rounded  ">
          <FormField
            control={control}
            name={`dataSets.${index}.dataList.${dataIndex}.label`}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Label</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={control}
            name={`dataSets.${index}.dataList.${dataIndex}.data`}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Data</FormLabel>
                <FormControl>
                  <Input type="number" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="button" onClick={() => remove(dataIndex)} className="bg-red-500 mt-4 ">
            Remove this Data
          </Button>
        </div>
      ))}
      <Button
        type="button"
        className="bg-green-600"
        onClick={() => append({ label: "", data: 0 })}
      >
        Insert new Data
      </Button>
    </div>
  );
};

export default NestedForm;
