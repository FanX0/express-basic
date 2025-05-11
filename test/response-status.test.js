import request from "supertest";
import { app } from "../src/app";

test("Response Status", async () => {
  let response = await request(app)
    .get("/response-status")
    .query({ name: "Farid" });
  expect(response.status).toBe(200);
  expect(response.text).toBe(`Hello Farid`);

  response = await request(app).get("/response-status");
  expect(response.status).toBe(400);
});
