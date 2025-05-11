import request from "supertest";
import { app } from "../src/app";

test("Products Dynamic Path", async () => {
  const response = await request(app).get("/products/farid.json");

  expect(response.text).toBe("/products/farid.json");
});
