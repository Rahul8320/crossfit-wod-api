import express from "express";
import v1WorkoutRouter from "../src/v1/routes/workoutRoutes.js";
import v1RecordRouter from "../src/v1/routes/recordRoutes.js";

// create the express app
const app = express();

app.use(express.json());

// add routers
app.use("/api/v1/workouts", v1WorkoutRouter);
app.use("/api/v1/records", v1RecordRouter);

export default app;
