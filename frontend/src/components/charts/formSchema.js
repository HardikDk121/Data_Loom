import { z } from "zod";

export const formSchema = z.object({
  type: z.string().min(1),
  title: z.string().min(1, { message: "Title is required" }),
  description: z.string().optional(),
  dataSets: z.array(
    z.object({
      label: z.string().min(1, { message: "Label is required" }),
      values: z.record(z.number().min(0, { message: "Must be a non-negative number" }))
    })
  ).min(1, { message: "At least one dataset is required" }),
  id: z.string(),
  createdAt: z.date()
});
