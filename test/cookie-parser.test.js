import request from "supertest";
import { app } from "../src/app";

test("Cookie Parser", async () => {
  const response = await request(app)
    .get("/cookie-parser")
    .set("Cookie", "name=Farid;author=FaridAzhari");
  expect(response.text).toBe("Hello Farid");
});
