import {test, expect} from "vitest"
import app from "../app.js"
import request from "supertest"


//Make a test case for the api

test("GET /api/health works", async () => {
  const response = await request(app).get("/api/health");
  expect(response.status).toBe(200);
  expect(response.body).toEqual({
    success: true,
    payload: "API is running correctly"
  });

});