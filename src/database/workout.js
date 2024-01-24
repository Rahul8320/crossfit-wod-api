import DB from "./db.json" assert { type: "json" };
import { saveToDatabase } from "./utils.js";

const getAllWorkouts = () => {
  try {
    return DB.workouts;
  } catch (error) {
    throw error;
  }
};

const getWorkoutById = (id) => {
  try {
    return DB.workouts.find((workout) => workout.id === id);
  } catch (error) {
    throw error;
  }
};

const isWorkoutPresent = (name) => {
  try {
    const isAlreadyExists = DB.workouts.find(
      (workout) => workout.name === name
    );

    if (isAlreadyExists) {
      return true;
    }

    return false;
  } catch (error) {
    throw error;
  }
};

const createNewWorkout = (newWorkout) => {
  try {
    DB.workouts.push(newWorkout);
    saveToDatabase(DB);
    return newWorkout;
  } catch (error) {
    throw error;
  }
};

const updateWorkout = (workoutId, workout) => {
  try {
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
  } catch (error) {
    throw error;
  }
};

const removeWorkout = (workoutId) => {
  try {
    const index = DB.workouts.findIndex((item) => item.id === workoutId);

    if (index === -1) {
      return null;
    }

    DB.workouts.splice(index, 1);
    saveToDatabase(DB);
  } catch (error) {
    throw error;
  }
};

export default {
  getAllWorkouts,
  getWorkoutById,
  isWorkoutPresent,
  createNewWorkout,
  updateWorkout,
  removeWorkout,
};
