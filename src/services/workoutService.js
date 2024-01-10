import { v4 as uuid } from "uuid";
import Workout from "../database/workout.js";

const getAllWorkouts = () => {
  const allWorkouts = Workout.getAllWorkouts();

  return allWorkouts;
};

const getWorkoutById = (id) => {
  const workout = Workout.getWorkoutById(id);

  return workout ?? null;
};

const createNewWorkout = (newWorkout) => {
  const isAlreadyExists = Workout.isWorkoutPresent(newWorkout.name);

  if (isAlreadyExists) {
    return null;
  }

  const workout = {
    id: uuid(),
    ...newWorkout,
    createdAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
    updatedAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
  };

  const createdWorkout = Workout.createNewWorkout(workout);
  return createdWorkout;
};

const updateWorkoutById = () => {
  return;
};

const deleteWorkoutById = () => {
  return;
};

export default {
  getAllWorkouts,
  getWorkoutById,
  createNewWorkout,
  updateWorkoutById,
  deleteWorkoutById,
};
