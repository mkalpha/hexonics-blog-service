import supertest from "supertest";
import mongoose from "mongoose";
import { server } from "../index";
import { populateTables } from "../testUtils";

const request = supertest(server);

describe("/trpc", () => {
  beforeAll(async () => {
    await populateTables();
  });

  afterAll(async () => {
    const collections = await mongoose.connection.db.collections();

    for (let collection of collections) {
      await collection.drop();
    }
    mongoose.connection.close();
    server.close();
  });
  describe("getBlogs", () => {
    it("Returns 200 for a request to getBlogs", async () => {
      const response = await request.get("/trpc/getBlogs");
      expect(response.statusCode).toBe(200);
    });
  });
});
