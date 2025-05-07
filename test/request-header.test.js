import request from "supertest";
import { app } from "../src/app";

test("Request Header", async () => {
  const response = await request(app)
    .get("/request-header")
    .set("Accept", "text/plain");

  expect(response.text).toBe("Hello text/plain");
});
