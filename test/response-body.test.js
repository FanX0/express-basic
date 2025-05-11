import request from "supertest";
import { app } from "../src/app";

test("Response Body", async () => {
  const response = await request(app).get("/response-body");
  expect(response.get("Content-Type")).toContain("text/html");
  expect(response.text).toBe(
    "<html><head><title>Hello Farid</title></head></html>"
  );
});
