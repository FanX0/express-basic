import request from "supertest";
import { app } from "../src/app";

test("Response Redirect", async () => {
  const response = await request(app).get("/response-redirect");

  expect(response.status).toBe(302);
  expect(response.get("Location")).toBe("/to-next-page");
});
