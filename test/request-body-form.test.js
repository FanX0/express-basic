import request from "supertest";
import { app } from "../src/app";

test("Request Body Form", async () => {
  const response = await request(app)
    .get("/request-body-form")
    .send("name=Farid");
  expect(response.body).toEqual({ hello: "Hello Farid" });
});
