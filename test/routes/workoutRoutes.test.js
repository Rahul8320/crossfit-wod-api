import request from "supertest";
import app from "../../src/index.js";

let server;

beforeAll(() => {
  server = app;
});

afterAll(async () => {
  if (server) {
    server.close();
  }
});

describe("API workout Routes", () => {
  describe("GET /api/v1/workouts", () => {
    it("should return the correct message", async () => {
      const response = await request(app).get("/api/v1/workouts");

      expect(response.status).toBe(200);
      expect(response.body).toEqual({
        message: "Get all workouts",
      });
    });
  });

  describe("GET /api/v1/workouts/:workoutId", () => {
    it("should return the correct message", async () => {
      const response = await request(app).get("/api/v1/workouts/1");

      expect(response.status).toBe(200);
      expect(response.body).toEqual({
        message: "Get an existing workout with specific requested id",
      });
    });
  });

  describe("POST /api/v1/workouts", () => {
    it("should return the correct message", async () => {
      const response = await request(app).post("/api/v1/workouts");

      expect(response.status).toBe(201);
      expect(response.body).toEqual({
        message: "Create a new workout",
      });
    });
  });

  describe("PATCH /api/v1/workouts/:workoutId", () => {
    it("should return the correct message", async () => {
      const response = await request(app).patch("/api/v1/workouts/1");

      expect(response.status).toBe(200);
      expect(response.body).toEqual({
        message: "Update an existing workout",
      });
    });
  });

  describe("DELETE /api/v1/workouts/:workoutId", () => {
    it("should return the correct message", async () => {
      const response = await request(app).delete("/api/v1/workouts/1");

      expect(response.status).toBe(200);
      expect(response.body).toEqual({
        message: "Delete an existing workout",
      });
    });
  });
});
