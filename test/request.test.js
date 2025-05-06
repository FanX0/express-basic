import { app } from "../src/index";
import request from "supertest";

test("Request", async () => {
  const response = await request(app).get("/request").query({ name: "World" });
  expect(response.text).toBe("Hello World");
});
