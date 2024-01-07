import express from "express";

const router = express.Router();

router.get("/", (_req, res) => {
  res.status(200).json({ message: "Get all workouts" });
});

router.get("/:workoutId", (_req, res) => {
  res
    .status(200)
    .json({ message: "Get an existing workout with specific requested id" });
});

router.post("/", (_req, res) => {
  res.status(201).json({ message: "Create a new workout" });
});

router.patch("/:workoutId", (_req, res) => {
  res.status(200).json({ message: "Update an existing workout" });
});

router.delete("/:workoutId", (_req, res) => {
  res.status(200).json({ message: "Delete an existing workout" });
});

export default router;
