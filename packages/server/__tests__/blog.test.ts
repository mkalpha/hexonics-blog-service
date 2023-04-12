import supertest from "supertest";
import mongoose from "mongoose";
import { server } from "../index";

const request = supertest(server);

describe("/trpc", () => {
  afterAll(() => {
    mongoose.connection.close();
    server.close();
  });
  describe("getBlogs", () => {
    it("Returns 200 for a request to getBlogs", async () => {
      const response = await request.get("/trpc/getBlogs");
      console.log("response :", response.body.result.data);
      expect(response.statusCode).toBe(200);
    });
  });
});
