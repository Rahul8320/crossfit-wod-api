import Record from "../database/record.js";

const getAllRecords = () => {
  try {
    const allRecords = Record.getAllRecords();

    return allRecords;
  } catch (error) {
    throw error;
  }
};

const getRecordById = (id) => {
  try {
    const workout = Record.getRecordById(id);
    return workout;
  } catch (error) {
    throw error;
  }
};

const getRecordByWorkoutId = (workoutId) => {
  try {
    const record = Record.getRecordForWorkout(workoutId);
    return record;
  } catch (error) {
    throw error;
  }
};

export default {
  getAllRecords,
  getRecordById,
  getRecordByWorkoutId,
};
