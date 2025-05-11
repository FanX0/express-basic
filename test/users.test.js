import request from "supertest";
import { app } from "../src/app.js";

test("Should be Daftar User", async () => {
  const response = await request(app)
    .get("/users")
    .expect(200)
    .query({ apiKey: "123" });
  expect(response.text).toBe("Daftar User");
});
