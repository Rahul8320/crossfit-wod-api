import express from "express";
import workoutController from "../../controllers/workoutController.js";

const router = express.Router();

router.get("/", workoutController.getAllWorkouts);

router.get("/:workoutId", workoutController.getWorkoutById);

router.post("/", workoutController.createNewWorkout);

router.patch("/:workoutId", workoutController.updateWorkoutById);

router.delete("/:workoutId", workoutController.deleteWorkoutById);

export default router;
