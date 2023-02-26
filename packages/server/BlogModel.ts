import mongoose from "mongoose";
import { z as zod } from "zod";

const blogSchema = new mongoose.Schema(
  {
    ID: {
      type: String,
      required: [true, "ID field is required"],
    },
    title: {
      type: String,
      required: [true, "title field is required"],
    },
    description: {
      type: String,
      required: [true, "description field is required"],
    },
    userID: {
      type: String,
      required: [true, "userID field is required"],
    },
    content: {
      type: String,
      required: [true, "content field is required"],
    },
    mainImageURL: {
      type: String,
      required: false,
    },
    tags: {
      type: Array<String>,
      required: [true, "tags field is required"],
    },
  },
  { timestamps: true }
);

export const BlogModel = mongoose.model("blog", blogSchema);

export const BlogSchema = zod.object({
  title: zod.string(),
  description: zod.string(),
  userID: zod.string(),
  content: zod.string(),
  mainImageURL: zod.optional(zod.string()),
  tags: zod.array(zod.string()),
});
export type Blog = zod.infer<typeof BlogSchema>;
