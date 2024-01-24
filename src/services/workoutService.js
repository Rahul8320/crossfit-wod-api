import { v4 as uuid } from "uuid";
import Workout from "../database/workout.js";

const getAllWorkouts = () => {
  try {
    const allWorkouts = Workout.getAllWorkouts();

    return allWorkouts;
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

const getWorkoutById = (id) => {
  try {
    const workout = Workout.getWorkoutById(id);

    return workout ?? null;
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

const createNewWorkout = (newWorkout) => {
  try {
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
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

const updateWorkoutById = (workoutId, workout) => {
  try {
    const existingWorkout = getWorkoutById(workoutId);

    if (existingWorkout === null) {
      return null;
    }

    existingWorkout.name = workout.name;
    existingWorkout.mode = workout.mode;
    existingWorkout.equipment = workout.equipment;
    existingWorkout.exercises = workout.exercises;
    existingWorkout.trainerTips = workout.trainerTips;

    const updatedWorkout = Workout.updateWorkout(workoutId, existingWorkout);

    return updatedWorkout;
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

const deleteWorkoutById = (workoutId) => {
  try {
    const existingWorkout = getWorkoutById(workoutId);

    if (existingWorkout === null) {
      return null;
    }

    Workout.removeWorkout(workoutId);
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

export default {
  getAllWorkouts,
  getWorkoutById,
  createNewWorkout,
  updateWorkoutById,
  deleteWorkoutById,
};
