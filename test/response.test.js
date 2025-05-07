import { app } from "../src/app";
import request from "supertest";

test("Response", async () => {
  const response = await request(app).get("/response");
  expect(response.text).toBe("Hello Response");
});
