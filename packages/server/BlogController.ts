import { BlogModel, Blog } from "./BlogModel";
import { v4 as uuidv4 } from "uuid";

export const getAllBlogs = async () => {
  const blogs = await BlogModel.find();
  console.log("blogs :", blogs);
  return blogs;
};

export const createNewBlog = async (blog: Blog) => {
  const ID = uuidv4();
  const newBlog = await BlogModel.create({ ID, ...blog });
  console.log("newBlog :", newBlog);
};
