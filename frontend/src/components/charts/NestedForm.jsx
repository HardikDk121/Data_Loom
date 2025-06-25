import { useFieldArray } from "react-hook-form";
const NestedForm = () => {

  const { fields, append, remove } = useFieldArray(
    {

    });
  return (
    <>   {
      fields.map((field, index) => (
        <div key={field.id} className="border p-4 rounded space-y-2">
          <FormField
            control={form.control}
            name={`datasets.${index}.dataKey`}
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
              return (
                <FormItem>
                  <FormLabel>Data </FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      {...field}
                      step="any"
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
      ))
    }
      < Button type="button" onClick={() => append({ label: "", data: [] })} className={` bg - green - 800 hover: bg - green - 600 text - gray - 200`}> Add Dataset</Button >
    </>
  )
}
export default NestedForm;
