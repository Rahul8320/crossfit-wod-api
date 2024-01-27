import request from "supertest";
import app from "../src/index.js";

describe("GET Workout By ID Route", () => {
  it("GET /workouts/id --> Returns specific workout by ID", async () => {
    const res = await request(app)
      .get("/api/v1/workouts/61dbae02-c147-4e28-863c-db7bd402b2d6")
      .expect("Content-Type", /json/)
      .expect(200);

    expect(res.status).toBe(200);

    expect(res.body).toEqual(
      expect.objectContaining({
        status: 200,
        message: "Workout successfully fetched",
        data: expect.objectContaining({
          id: expect.any(String),
          name: expect.any(String),
          mode: expect.any(String),
          equipment: expect.any(Array),
          exercises: expect.any(Array),
          trainerTips: expect.any(Array),
          createdAt: expect.any(String),
          updatedAt: expect.any(String),
        }),
      })
    );
  });

  it("GET /workouts/id --> Returns 404 if not found", async () => {
    return await request(app)
      .get("/api/v1/workouts/61dbae02-c147-4e28-863c-db7bd402b2d9")
      .expect("Content-Type", /json/)
      .expect(404);
  });

  it("GET /workouts/id --> Returns 400 for invalid ID", async () => {
    const res = await request(app)
      .get("/api/v1/workouts/invalid-id")
      .expect("Content-Type", /json/)
      .expect(400);

    expect(res.status).toBe(400);
    expect(res.body.errors[0].msg).toBe(
      "Invalid Workout ID. Please enter a valid workout ID"
    );
  });
});
