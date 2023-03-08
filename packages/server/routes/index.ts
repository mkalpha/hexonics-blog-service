import { initTRPC } from "@trpc/server";
import { Context } from "../index";
import { getAllBlogs, createNewBlog } from "../BlogController";
import { BlogSchema } from "../BlogSchema";

export const trpc = initTRPC.context<Context>().create();

const routes = {
  getBlogs: trpc.procedure.query(async (req) => {
    const blogs = await getAllBlogs();
    return blogs;
  }),
  createBlog: trpc.procedure.input(BlogSchema).mutation(async (req) => {
    const newBlogcontent = req.input;
    console.log("newBlogcontent :", newBlogcontent);
    const newBlog = await createNewBlog(newBlogcontent);
    return newBlog;
  }),
};

export const appRouter = trpc.router(routes);
