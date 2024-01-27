import request from "supertest";
import app from "../src/index.js";

let server;

beforeAll(() => {
  server = app;
});

afterAll(async () => {
  if (server) {
    server.close();
  }
});

describe("Get All Workouts Api", () => {
  it("Gives success response with json data", async () => {
    const response = await request(app).get(
      "/api/v1/workouts?pageSize=5&pageNum=2"
    );

    expect(response.status).toBe(200);
    // expect(response.body).toBe(JSON);
  });
});
