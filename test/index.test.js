import request from "supertest";
import app from "../src/app.js";

describe("crossfit's test cases", () => {
  test("Testing the test setup for this project", () => {
    expect(2 + 2).toBe(4);
  });
});

describe("Workout API", () => {
  it("GET /workouts --> Returns a list of workouts", () => {});

  it("GET /workouts/id --> Returns specific workout by ID", () => {});

  it("GET /workouts/id --> Returns 404 if not found", () => {});

  it("POST /workouts --> Returns newly created workout", () => {});

  it("GET /workouts --> Validates request body", () => {});

  it("POST /workouts --> Validates request body", () => {});
});
