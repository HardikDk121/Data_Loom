import { useFieldArray } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { useState } from "react";

const NestedForm = ({ control, index, register }) => {
  const { fields, append, remove } = useFieldArray({
    control: control,
    name: `dataSets.${index}.values`,
  });

  return (
    <div className="space-y-2  ">
      {fields.map((field, dataIndex) => (
        <div key={field.id} className="border p-1 rounded flex gap-4 ">

          <FormField
            control={form.control}
            name={`dataSets.${index}.values.${dataIndex}`}
            render={({ field }) => (
              <FormItem className="w-1/2">
                <FormLabel>value</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="e.g., January" />
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
        onClick={() => append({ label: "", })}
      >
        Insert new Data
      </Button>
    </div>
  );
};

export default NestedForm;
