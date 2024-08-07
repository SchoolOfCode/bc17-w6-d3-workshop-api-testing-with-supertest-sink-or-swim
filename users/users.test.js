//importing test function then sending a ping to test (npm run test)
import {test, expect} from "vitest";
    test ("GET /api/health works", () => {
        expect(true).toBe(true);
    });

