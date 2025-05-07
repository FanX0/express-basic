import { app } from "../src/app";
import request from "supertest";

test("Request-Query", async () => {
  const response = await request(app)
    .get("/request-query")
    .query({ firstName: "Farid", lastName: "Azhari" });
  expect(response.text).toBe("Hello Farid Azhari");
});
