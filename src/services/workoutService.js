import { v4 as uuid } from "uuid";
import Workout from "../database/workout.js";

const getAllWorkouts = (filterParams) => {
  try {
    // fetch all workouts from the database.
    let allWorkouts = Workout.getAllWorkouts();

    // apply the filter if it exists
    if (filterParams.mode) {
      allWorkouts = allWorkouts.filter((workout) =>
        workout.mode.toLowerCase().includes(filterParams.mode)
      );
    }

    if (filterParams.equipment) {
      allWorkouts = allWorkouts.filter((workout) =>
        workout.equipment.includes(filterParams.equipment)
      );
    }

    // calculate the starting index for the workouts.
    const startingIndex = filterParams.pageSize * (filterParams.pageNum - 1);

    return {
      total: allWorkouts.length,
      pageSize: filterParams.pageSize,
      pageNumber: filterParams.pageNum,
      workouts: allWorkouts.slice(
        startingIndex,
        startingIndex + filterParams.pageSize
      ),
    };
  } catch (error) {
    throw error;
  }
};

const getWorkoutById = (id) => {
  try {
    const workout = Workout.getWorkoutById(id);

    return workout ?? null;
  } catch (error) {
    throw error;
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
    throw error;
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
    throw error;
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
    throw error;
  }
};

export default {
  getAllWorkouts,
  getWorkoutById,
  createNewWorkout,
  updateWorkoutById,
  deleteWorkoutById,
};
