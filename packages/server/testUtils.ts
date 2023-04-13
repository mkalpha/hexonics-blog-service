import YAML from "js-yaml";
import fs from "fs";
import { createNewBlog } from "./BlogController";
import { Blog } from "./BlogSchema";

export const populateTables = async () => {
  const rawData = fs.readFileSync("./__tests__/fixtures.yaml");
  const { blogs } = <{ blogs: Array<Blog> }>YAML.load(rawData.toString());

  for (const blog of blogs) {
    await createNewBlog(blog);
  }
};
