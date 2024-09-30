import request from "supertest";
import { describe, expect, it } from "vitest";

import { app } from "./app";

describe("Express - Todo App", () => {
	it("GET /api should return hello world", async () => {
		const response = await request(app).get("/api");
		expect(response.status).toBe(200);
		expect(response.body).toEqual({ name: "Hello world" });
	});

	it("GET /404 should return not found", async () => {
		const response = await request(app).get("/404");
		expect(response.status).toBe(404);
	});
});
