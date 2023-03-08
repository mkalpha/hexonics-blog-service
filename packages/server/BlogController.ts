import { BlogModel, IBlog } from "./BlogModel";
import { Blog } from "./BlogSchema";

export const getAllBlogs = async () => {
  const blogs: Array<IBlog> = await BlogModel.find();
  console.log("blogs :", blogs);
  return blogs;
};

export const createNewBlog = async (blog: Blog) => {
  const newBlog: IBlog = await BlogModel.create(blog);
  console.log("newBlog :", newBlog);
};
