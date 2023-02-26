import { BlogModel } from "./BlogModel";

export const getAllBlogs = async () => {
  const blogs = await BlogModel.find();
  console.log("blogs :", blogs);
  return blogs;
};
