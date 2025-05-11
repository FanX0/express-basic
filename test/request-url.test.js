import { app } from "../src/app";
import request from "supertest";

test("Request-url", async () => {
  const response = await request(app)
    .get("/request-url")
    .query({ name: "Farid" });

  expect(response.body).toEqual({
    path: "/",
    originalUrl: "/request-url?name=Farid",
    hostname: "127.0.0.1",
    protocol: "http",
    secure: false,
  });
});
