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

export default {
  getAllWorkouts,
  getWorkoutById,
  isWorkoutPresent,
  createNewWorkout,
};
