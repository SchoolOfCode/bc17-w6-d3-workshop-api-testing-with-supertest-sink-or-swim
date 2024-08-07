import {test, expect} from "vitest"
import express from "/app.js"
import request from "supertest"
import { parse } from "dotenv"
//Make a test case for the api

describe("GET /api/health", function () {
    it("responds with health status", async function () {
      const response = await request(app).get("/api/health").set("Accept", "application/json");
      expect(response.headers["content-type"]).toMatch(/json/);
      expect(response.status).toEqual(200);
      expect(response.body.status).toEqual("healthy");
    });
  });