import request from "supertest";
import { app } from "../src/app";

test("Middleware ", async () => {
  const response = await request(app).get("/users").query({ apiKey: "123" });
  expect(response.get("X-Powered-By")).toBe("Farid Azhari");
  expect(response.status).toBe(200);
  expect(response.text).toBe("Daftar User");
});
