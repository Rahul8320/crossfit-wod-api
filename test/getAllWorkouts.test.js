import request from "supertest";
import app from "../src/index.js";

describe("GET All Workouts Route", () => {
  it("GET /workouts --> Returns a list of workouts", async () => {
    const res = await request(app)
      .get("/api/v1/workouts?pageSize=5&pageNum=2")
      .expect("Content-Type", /json/)
      .expect(200);

    expect(res.body.status).toBe(200);
    expect(res.body.message).toBe("Workouts successfully fetched");
    expect(res.body.data.pageNumber).toBe(2);
    expect(res.body.data.pageSize).toBe(5);

    expect(res.body).toEqual(
      expect.objectContaining({
        status: expect.any(Number),
        message: expect.any(String),
        data: expect.objectContaining({
          pageNumber: expect.any(Number),
          pageSize: expect.any(Number),
          total: expect.any(Number),
          workouts: expect.arrayContaining([
            expect.objectContaining({
              id: expect.any(String),
              name: expect.any(String),
              mode: expect.any(String),
              equipment: expect.any(Array),
              exercises: expect.any(Array),
              trainerTips: expect.any(Array),
              createdAt: expect.any(String),
              updatedAt: expect.any(String),
            }),
          ]),
        }),
      })
    );
  });

  it("GET /workouts --> Returns 400 for no required params", async () => {
    const res = await request(app)
      .get("/api/v1/workouts")
      .expect("Content-Type", /json/)
      .expect(400);

    expect(res.status).toBe(400);
    expect(res.body.errors.length).toBe(4);

    expect(res.body.errors[0].path).toBe("pageSize");
    expect(res.body.errors[0].msg).toBe("Page Size cannot be empty");

    expect(res.body.errors[1].path).toBe("pageSize");
    expect(res.body.errors[1].msg).toBe("Page Size must be a number!");

    expect(res.body.errors[2].path).toBe("pageNum");
    expect(res.body.errors[2].msg).toBe("Page Number cannot be empty");

    expect(res.body.errors[3].path).toBe("pageNum");
    expect(res.body.errors[3].msg).toBe("Page Number must be a number!");
  });

  it("GET /workouts --> Returns 400 for invalid required params", async () => {
    const res = await request(app)
      .get("/api/v1/workouts?pageSize=true&pageNum=false")
      .expect("Content-Type", /json/)
      .expect(400);

    expect(res.status).toBe(400);
    expect(res.body.errors.length).toBe(2);

    expect(res.body.errors[0].path).toBe("pageSize");
    expect(res.body.errors[0].msg).toBe("Page Size must be a number!");

    expect(res.body.errors[1].path).toBe("pageNum");
    expect(res.body.errors[1].msg).toBe("Page Number must be a number!");
  });

  it("GET /workouts --> Returns 400 for invalid all params", async () => {
    const res = await request(app)
      .get(
        "/api/v1/workouts?pageSize=true&pageNum=false&mode=12&equipment=9090"
      )
      .expect("Content-Type", /json/)
      .expect(400);

    expect(res.status).toBe(400);
    expect(res.body.errors.length).toBe(4);

    expect(res.body.errors[0].path).toBe("mode");
    expect(res.body.errors[0].msg).toBe("Mode cannot be a number!");

    expect(res.body.errors[1].path).toBe("equipment");
    expect(res.body.errors[1].msg).toBe("Equipment cannot be a number!");

    expect(res.body.errors[2].path).toBe("pageSize");
    expect(res.body.errors[2].msg).toBe("Page Size must be a number!");

    expect(res.body.errors[3].path).toBe("pageNum");
    expect(res.body.errors[3].msg).toBe("Page Number must be a number!");
  });

  it("GET /workouts --> Returns 400 for invalid pageSize param", async () => {
    const res = await request(app)
      .get("/api/v1/workouts?pageSize=true&pageNum=1")
      .expect("Content-Type", /json/)
      .expect(400);

    expect(res.status).toBe(400);
    expect(res.body.errors.length).toBe(1);

    expect(res.body.errors[0].path).toBe("pageSize");
    expect(res.body.errors[0].msg).toBe("Page Size must be a number!");
  });

  it("GET /workouts --> Returns 400 for invalid pageNum param", async () => {
    const res = await request(app)
      .get("/api/v1/workouts?pageSize=3&pageNum=false")
      .expect("Content-Type", /json/)
      .expect(400);

    expect(res.status).toBe(400);
    expect(res.body.errors.length).toBe(1);

    expect(res.body.errors[0].path).toBe("pageNum");
    expect(res.body.errors[0].msg).toBe("Page Number must be a number!");
  });

  it("GET /workouts --> Validates request body", () => {
    return request(app)
      .get("/api/v1/workouts?pageSize=true&pageNum=false&mode=12")
      .expect("Content-Type", /json/)
      .expect(400);
  });
});
