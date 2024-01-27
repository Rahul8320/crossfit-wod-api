import request from "supertest";
import app from "../src/app.js";

describe("crossfit's test cases", () => {
  test("Testing the test setup for this project", () => {
    expect(2 + 2).toBe(4);
  });
});

describe("Workout API", () => {
  it("POST /workouts --> Returns newly created workout", () => {});

  it("POST /workouts --> Validates request body", () => {});
});
