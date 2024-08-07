//importing test function then sending a ping to test (npm run test)
import {test, expect} from 'vitest';
import request from 'supertest';
import app from '../app.js';

    //Make a test case for the api

    test("GET /api/health works", async () => {
      const response = await request(app).get("/api/health");
      console.log(response.body);
      //expect(response.status).toBe(200);
      //expect(response.body).toEqual({
     // success: true,
    //payload: "API is running correctly"
      });
    
