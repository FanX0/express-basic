import request from "supertest";
import { app } from "../src/app";

test("Response Header", async () => {
  const response = await request(app).get("/response-header");

  expect(response.get("X-Powered-By")).toBe("Farid Azhari");
  expect(response.get("X-Author")).toBe("Farid");
});
