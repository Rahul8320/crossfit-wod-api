import DB from "./db.json" assert { type: "json" };
import { saveToDatabase } from "./utils.js";

const getAllWorkouts = () => {
  return DB.workouts;
};

const getWorkoutById = (id) => {
  return DB.workouts.find((workout) => workout.id === id);
};

const isWorkoutPresent = (name) => {
  const isAlreadyExists = DB.workouts.find((workout) => workout.name === name);

  if (isAlreadyExists) {
    return true;
  }

  return false;
};

const createNewWorkout = (newWorkout) => {
  DB.workouts.push(newWorkout);
  saveToDatabase(DB);
  return newWorkout;
};

const updateWorkout = (workoutId, workout) => {
  const index = DB.workouts.findIndex((item) => item.id === workoutId);

  if (index === -1) {
    return null;
  }

  const updatedWorkout = {
    ...DB.workouts[index],
    ...workout,
    updatedAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
  };

  DB.workouts[index] = updatedWorkout;
  saveToDatabase(DB);

  return updatedWorkout;
};

const removeWorkout = (workoutId) => {
  const index = DB.workouts.findIndex((item) => item.id === workoutId);

  if (index === -1) {
    return null;
  }

  DB.workouts.splice(index, 1);
  saveToDatabase(DB);
};

export default {
  getAllWorkouts,
  getWorkoutById,
  isWorkoutPresent,
  createNewWorkout,
  updateWorkout,
  removeWorkout,
};
