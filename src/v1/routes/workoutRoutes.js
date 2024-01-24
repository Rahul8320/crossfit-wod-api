import express from "express";
import { checkSchema } from "express-validator";
import workoutController from "../../controllers/workoutController.js";
import { createWorkoutValidator } from "../../middlewares/validators/createWorkout.validator.js";
import { validate } from "../../middlewares/validate.js";
import { workoutIdValidator } from "../../middlewares/validators/workoutId.validator.js";
import recordController from "../../controllers/recordController.js";

const router = express.Router();

router.get("/", workoutController.getAllWorkouts);

router.get(
  "/:workoutId",
  checkSchema(workoutIdValidator),
  validate,
  workoutController.getWorkoutById
);

router.get(
  "/:workoutId/records",
  checkSchema(workoutIdValidator),
  validate,
  recordController.getRecordsForWorkout
);

router.post(
  "/",
  checkSchema(createWorkoutValidator),
  validate,
  workoutController.createNewWorkout
);

router.patch(
  "/:workoutId",
  checkSchema(createWorkoutValidator),
  checkSchema(workoutIdValidator),
  validate,
  workoutController.updateWorkoutById
);

router.delete(
  "/:workoutId",
  checkSchema(workoutIdValidator),
  validate,
  workoutController.deleteWorkoutById
);

export default router;
