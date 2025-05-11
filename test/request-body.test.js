import request from "supertest";
import { app } from "../src/app";

test("Reqeust Body", async () => {
  const response = await request(app)
    .get("/request-body")
    .send({ name: "Farid" });
  expect(response.body).toEqual({ hello: "Hello Farid" });
});
