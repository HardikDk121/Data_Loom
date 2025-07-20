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
  const [dataKeyName, setDataKeyName] = useState("");
  return (
    <div className="space-y-2 border p-4 ">
      {fields.map((field, dataIndex) => (
        <div key={field.id} className="  rounded flex gap-4 ">
          <FormField
            control={control}
            name={`dataSets.${index}.values.${dataIndex}`}
            render={({ field }) => (
              <FormItem className="w-1/2">
                <FormLabel>{Object.keys(field)[dataIndex]}</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="e.g., January" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="button" onClick={() => remove(dataIndex)} className="bg-red-500  ">
            Remove Data key
          </Button>
        </div>
      ))}
      <div>
        <FormItem>
          <FormLabel>Data key name</FormLabel>
          <FormControl>
            <Input
              value={dataKeyName}
              onChange={(e) => setDataKeyName(e.target.value)}
              placeholder="Type something"
            />
          </FormControl>
        </FormItem>
        <Button
          type="button"
          className="bg-green-600"
          onClick={() => {
            const keyName = dataKeyName;
            setDataKeyName("");
            return append({ [keyName]: "" })
          }}
        >
          Insert new Data
        </Button>
      </div>
    </div>
  );
};

export default NestedForm;
