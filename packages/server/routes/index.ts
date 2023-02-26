import { initTRPC } from "@trpc/server";
import { Context } from "../index";
import { getAllBlogs } from "../BlogController";
import { BlogSchema } from "../BlogModel";

export const trpc = initTRPC.context<Context>().create();

const routes = {
  getBlogs: trpc.procedure.query((req) => {
    const blogs = getAllBlogs();
    return blogs;
  }),
  createBlog: trpc.procedure.input(BlogSchema).mutation(async (req) => {
    const newBlogcontent = req.input;
    console.log("newBlogcontent :", newBlogcontent);
    return "Testing";
  }),
};

export const appRouter = trpc.router(routes);
