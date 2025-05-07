import request from "supertest";
import { app } from "../src/app.js";

test("Should be Daftar User", async () => {
  const response = await request(app).get("/users").expect(200);
  expect(response.text).toBe("Daftar user");
});
