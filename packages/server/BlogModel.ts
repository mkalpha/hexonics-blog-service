import mongoose from "mongoose";

export interface IBlog {
  _id: string;
  title: string;
  description: string;
  userID: string;
  content: string;
  mainImageURL: string;
  tags: Array<string>;
  created: string;
  updated: string;
  _v: number;
}

const blogSchema = new mongoose.Schema<IBlog>(
  {
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
      type: [String],
      required: [true, "tags field is required"],
    },
  },
  { timestamps: true }
);

export const BlogModel = mongoose.model<IBlog>("blog", blogSchema);
