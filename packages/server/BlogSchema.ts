import { z as zod } from "zod";

export const BlogSchema = zod.object({
  title: zod.string(),
  description: zod.string(),
  userID: zod.string(),
  content: zod.string(),
  mainImageURL: zod.optional(zod.string()),
  tags: zod.array(zod.string()),
});
export type Blog = zod.infer<typeof BlogSchema>;
