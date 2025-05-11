import request from "supertest";
import { app } from "../src/app";

test("Request Time from Middleware", async () => {
  const response = await request(app).get("/request-time");
  expect(response.text).toContain("Hello, Today Is");
  console.info(response.text);
});
