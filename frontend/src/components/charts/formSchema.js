import { z } from "zod";

export const dataSetSchema = z.object({
  label: z.string().min(1, { message: "Label is required" }),
  data: z.number().min(1, { message: "Data is required" }),
});

export const dataKeySchema = z.object({
  dataKey: z.string().min(1, { message: "DataKey is required" }),
  dataList: z.array(dataSetSchema).min(1, { message: "At least one dataset is required" }),
});

export const formSchema = z.object({
  type: z.string(),
  title: z.string().min(1, { message: "Title is required" }),
  description: z.string().optional(),
  dataSets: z.array(dataKeySchema).min(1, { message: "At least one DataKey group is required" }),
  id: z.string(),
  createdAt: z.date(),
});
