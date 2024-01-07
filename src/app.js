import express from "express";
import v1WorkoutRouter from "../src/v1/routes/workoutRoutes.js";

// create the express app
const app = express();

// add routers
app.use("/api/v1/workouts", v1WorkoutRouter);

export default app;
