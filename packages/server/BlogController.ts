import { BlogModel, Blog } from "./BlogModel";

export const getAllBlogs = async () => {
  const blogs = await BlogModel.find();
  console.log("blogs :", blogs);
  return blogs;
};

export const createNewBlog = async (blog: Blog) => {};
