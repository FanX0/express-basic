import request from "supertest";
import { app } from "../src/app";

test("Middleware", async () => {
  const response = await request(app).get("/users");
  expect(response.get("X-Powered-By")).toBe("Farid Azhari");
  expect(response.text).toBe("Daftar user");
});
